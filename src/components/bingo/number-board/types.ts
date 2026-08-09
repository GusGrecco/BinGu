export interface NumberBoardProps {
    className?: string;
}

export interface NumberButtonProps {
    number: number;
    isDrawn?: boolean;
    disabled?: boolean;
    onClick?: (number: number) => void;
}
