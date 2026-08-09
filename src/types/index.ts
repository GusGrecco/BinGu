export const BINGO_CARD_TYPES = ["full", "quina", "line"] as const;
export type BingoCardType = (typeof BINGO_CARD_TYPES)[number];

export interface BingoCalledNumber {
    value: number;
    order: number;
}

export interface BingoPrize {
    name: string;
    imageUrl: string | null;
}

export interface BingoGameState {
    calledNumbers: BingoCalledNumber[];
    cardType: BingoCardType;
    prize: BingoPrize;
}
