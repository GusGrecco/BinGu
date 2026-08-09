import { useCallback, useState } from "react";
import type { BingoGameState } from "@/types";
import { INITIAL_BINGO_GAME_STATE } from "@/constants";
import { drawNumber as drawNumberAction, undoLastCall as undoLastCallAction } from "@/store/bingo";

export const useBingoGame = () => {
    const [gameState, setGameState] = useState<BingoGameState>(INITIAL_BINGO_GAME_STATE);

    const drawNumber = useCallback((value: number) => {
        setGameState((previousState) => drawNumberAction(previousState, value));
    }, []);

    const undoLastCall = useCallback(() => {
        setGameState((previousState) => undoLastCallAction(previousState));
    }, []);

    return { gameState, drawNumber, undoLastCall };
};
