import { useBingoStore } from "@/store/bingo/store";
import { generateNumberRange } from "@/utils/range";
import { BINGO_MIN_NUMBER, BINGO_MAX_NUMBER } from "@/constants";
import { isNumberDrawn, getCurrentCall } from "@/store/bingo";
import { NumberButton } from "./number-button";

const boardNumbers = generateNumberRange(BINGO_MIN_NUMBER, BINGO_MAX_NUMBER);

interface NumberBoardProps {
    className?: string;
}

export const NumberBoard = ({ className }: NumberBoardProps) => {
    const gameState = useBingoStore((state) => state.gameState);
    const drawNumber = useBingoStore((state) => state.drawNumber);
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
                        onClick={drawNumber}
                    />
                </div>
            ))}
        </div>
    );
};