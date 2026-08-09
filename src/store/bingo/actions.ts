import type { BingoGameState } from "@/types";
import { BINGO_MIN_NUMBER, BINGO_MAX_NUMBER } from "@/constants";
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

export const resetCalledNumbers = (state: BingoGameState): BingoGameState => {
    if (getTotalCalls(state) === 0) {
        return state;
    }

    return {
        ...state,
        calledNumbers: [],
    };
};
