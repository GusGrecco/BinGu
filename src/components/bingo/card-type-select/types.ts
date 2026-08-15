import type { BingoCardType } from "@/types";

export interface CardTypeSelectProps {
    value: BingoCardType;
    onChange: (cardType: BingoCardType) => void;
    error?: string;
}
