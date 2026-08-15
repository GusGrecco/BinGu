import { useBingoStore } from "@/store/bingo/store";
import { ReturnCallButton } from "./return-call-button";
import { RestartGameButton } from "./restart-game-button";

interface GameControlsProps {
    onRestartRequest: () => void;
}

export const GameControls = ({ onRestartRequest }: GameControlsProps) => {
    const totalCalls = useBingoStore((state) => state.gameState.calledNumbers.length);
    const undoLastCall = useBingoStore((state) => state.undoLastCall);
    const disabled = totalCalls === 0;

    return (
        <div className="flex w-full gap-3 md:max-w-146">
            <ReturnCallButton disabled={disabled} onClick={undoLastCall} />
            <RestartGameButton disabled={disabled} onClick={onRestartRequest} />
        </div>
    );
};
