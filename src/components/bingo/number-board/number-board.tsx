import { generateNumberRange } from "@/utils/range";
import { BINGO_MIN_NUMBER, BINGO_MAX_NUMBER } from "@/constants";
import type { NumberBoardProps } from "./types";

const boardNumbers = generateNumberRange(BINGO_MIN_NUMBER, BINGO_MAX_NUMBER);

export const NumberBoard = ({ className }: NumberBoardProps) => {
    return (
        <div
            role="list"
            aria-label="Cartela de números de 1 a 90"
            className={`grid grid-cols-5 gap-1 sm:grid-cols-8 md:grid-cols-10 max-w-150 ${className ?? ""}`}
        >
            {boardNumbers.map((number) => (
                <div
                    key={number}
                    role="listitem"
                    className="flex max-h-15 aspect-square items-center justify-center rounded-md bg-surface text-sm text-text-primary"
                >
                    {number}
                </div>
            ))}
        </div>

    );
};
