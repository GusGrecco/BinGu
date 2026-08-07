import type { BingoGameState, BingoCardType } from "../types";

export const BINGO_MIN_NUMBER = 1;
export const BINGO_MAX_NUMBER = 90;

export const BINGO_CARD_TYPE_LABELS: Record<BingoCardType, string> = {
    full: "Cheia",
    quina: "Quina",
    line: "Linha",
};

export const INITIAL_BINGO_GAME_STATE: BingoGameState = {
    calledNumbers: [],
    cardType: null,
    prize: {
        name: "",
        imageUrl: null,
    },
};
