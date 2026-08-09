import type { BingoCalledNumber } from "@/types";

export interface CallHistoryProps {
    calledNumbers: BingoCalledNumber[];
    className?: string;
}

export interface CallHistoryItemProps {
    call: BingoCalledNumber;
    isCurrent?: boolean;
}