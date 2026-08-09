import { generateNumberRange } from "@/utils/range";
import { BINGO_MIN_NUMBER, BINGO_MAX_NUMBER } from "@/constants";
import { isNumberDrawn, getCurrentCall } from "@/store/bingo";
import { NumberButton } from "./number-button";
import type { NumberBoardProps } from "./types";

const boardNumbers = generateNumberRange(BINGO_MIN_NUMBER, BINGO_MAX_NUMBER);

export const NumberBoard = ({ gameState, onSelectNumber, className }: NumberBoardProps) => {
    const currentCall = getCurrentCall(gameState);

    return (
        <div
            role="list"
            aria-label="Cartela de números de 1 a 90"
            className={`grid grid-cols-5 gap-2 sm:grid-cols-8 md:grid-cols-10 ${className ?? ""}`}
        >
            {boardNumbers.map((number) => (
                <div key={number} role="listitem">
                    <NumberButton
                        number={number}
                        isDrawn={isNumberDrawn(gameState, number)}
                        isCurrent={currentCall?.value === number}
                        onClick={onSelectNumber}
                    />
                </div>
            ))}
        </div>
    );
};