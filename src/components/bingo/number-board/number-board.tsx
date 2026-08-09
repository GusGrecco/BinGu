import { generateNumberRange } from "@/utils/range";
import { BINGO_MIN_NUMBER, BINGO_MAX_NUMBER } from "@/constants";
import { isNumberDrawn } from "@/store/bingo";
import type { NumberBoardProps } from "./types";
import { NumberButton } from "./number-button";

const boardNumbers = generateNumberRange(BINGO_MIN_NUMBER, BINGO_MAX_NUMBER);

export const NumberBoard = ({ gameState, onSelectNumber, className }: NumberBoardProps) => {
    return (
        <div
            role="list"
            aria-label="Cartela de números de 1 a 90"
            className={`grid grid-cols-5 gap-2 sm:grid-cols-8 md:grid-cols-10 max-w-140 ${className ?? ""}`}
        >
            {boardNumbers.map((number) => (
                <div key={number} role="listitem">
                    <NumberButton
                        number={number}
                        isDrawn={isNumberDrawn(gameState, number)}
                        onClick={onSelectNumber}
                    />
                </div>
            ))}
        </div>
    );
};
