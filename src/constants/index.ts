import type { BingoGameState, BingoCardType } from "@/types";

export const BINGO_MIN_NUMBER = 1;
export const BINGO_MAX_NUMBER = 90;

export const BINGO_CARD_TYPE_LABELS: Record<BingoCardType, string> = {
    full: "Cheia",
    quina: "Quina",
    line: "Linha",
};

export const DEFAULT_BINGO_CARD_TYPE: BingoCardType = "full";

export const INITIAL_BINGO_GAME_STATE: BingoGameState = {
    calledNumbers: [],
    cardType: DEFAULT_BINGO_CARD_TYPE,
    prize: {
        name: "",
        imageUrl: null,
    },
};
