import { create } from "zustand";
import type { BingoCardType, BingoGameState, BingoPrize } from "@/types";
import { INITIAL_BINGO_GAME_STATE } from "@/constants";
import { revokePrizeImageUrl } from "@/lib/prize/revoke-prize-image-url";
import {
    drawNumber as drawNumberAction,
    undoLastCall as undoLastCallAction,
    resetGame as resetGameAction,
    initGame as initGameAction,
} from "./actions";

interface BingoStore {
    gameState: BingoGameState;
    drawNumber: (value: number) => void;
    undoLastCall: () => void;
    resetGame: () => void;
    initGame: (cardType: BingoCardType, prize: BingoPrize) => void;
}

export const useBingoStore = create<BingoStore>((set, get) => ({
    gameState: INITIAL_BINGO_GAME_STATE,

    drawNumber: (value) =>
        set((state) => ({ gameState: drawNumberAction(state.gameState, value) })),

    undoLastCall: () =>
        set((state) => ({ gameState: undoLastCallAction(state.gameState) })),

    resetGame: () => {
        revokePrizeImageUrl(get().gameState.prize.imageUrl);
        set({ gameState: resetGameAction() });
    },

    initGame: (cardType, prize) => {
        revokePrizeImageUrl(get().gameState.prize.imageUrl);
        set({ gameState: initGameAction({ cardType, prize }) });
    },
}));