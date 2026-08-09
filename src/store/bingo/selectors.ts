import type { BingoGameState, BingoCalledNumber } from "@/types";
import { BINGO_MAX_NUMBER } from "@/constants";

export const getCurrentCall = (state: BingoGameState): BingoCalledNumber | null => {
    const { calledNumbers } = state;
    return calledNumbers.length > 0 ? calledNumbers[calledNumbers.length - 1] : null;
};

export const getPreviousCall = (state: BingoGameState): BingoCalledNumber | null => {
    const { calledNumbers } = state;
    return calledNumbers.length > 1 ? calledNumbers[calledNumbers.length - 2] : null;
};

export const getTotalCalls = (state: BingoGameState): number => state.calledNumbers.length;

export const getRemainingCalls = (state: BingoGameState): number =>
    BINGO_MAX_NUMBER - getTotalCalls(state);

export const isNumberDrawn = (state: BingoGameState, value: number): boolean =>
    state.calledNumbers.some((call) => call.value === value);

export const getCallHistory = (state: BingoGameState): BingoCalledNumber[] => state.calledNumbers;
