import type { BingoGameState } from "@/types";

export interface NumberBoardProps {
    gameState: BingoGameState;
    onSelectNumber: (value: number) => void;
    className?: string;
}

export interface NumberButtonProps {
    number: number;
    isDrawn?: boolean;
    isCurrent?: boolean;
    disabled?: boolean;
    onClick?: (number: number) => void;
}
