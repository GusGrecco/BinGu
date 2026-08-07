export type BingoCardType = "full" | "quina" | "line";

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
    cardType: BingoCardType | null;
    prize: BingoPrize;
}
