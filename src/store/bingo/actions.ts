import type { BingoCardType, BingoGameState, BingoPrize } from "@/types";
import { BINGO_MIN_NUMBER, BINGO_MAX_NUMBER, DEFAULT_BINGO_CARD_TYPE } from "@/constants";
import { getTotalCalls, isNumberDrawn } from "./selectors";

export const drawNumber = (state: BingoGameState, value: number): BingoGameState => {
    const isOutOfRange = value < BINGO_MIN_NUMBER || value > BINGO_MAX_NUMBER;

    if (isOutOfRange || isNumberDrawn(state, value)) {
        return state;
    }

    const nextOrder = getTotalCalls(state) + 1;

    return {
        ...state,
        calledNumbers: [...state.calledNumbers, { value, order: nextOrder }],
    };
};

export const undoLastCall = (state: BingoGameState): BingoGameState => {
    if (getTotalCalls(state) === 0) {
        return state;
    }

    return {
        ...state,
        calledNumbers: state.calledNumbers.slice(0, -1),
    };
};

// Reset total: volta cardType e prize aos defaults, não só limpa calledNumbers.
export const resetGame = (): BingoGameState => ({
    calledNumbers: [],
    cardType: DEFAULT_BINGO_CARD_TYPE,
    prize: { name: "", imageUrl: null },
});

interface InitGameConfig {
    cardType: BingoCardType;
    prize: BingoPrize;
}

export const initGame = (config: InitGameConfig): BingoGameState => ({
    calledNumbers: [],
    cardType: config.cardType,
    prize: config.prize,
});
