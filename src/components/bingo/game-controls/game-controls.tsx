import { RestartGameButton } from "./restart-game-button";
import { ReturnCallButton } from "./return-call-button";
import type { ReturnCallButtonProps, RestartGameButtonProps } from "./types";

interface GameControlsProps {
    returnCall: ReturnCallButtonProps;
    restartGame: RestartGameButtonProps;
}

export const GameControls = ({ returnCall, restartGame }: GameControlsProps) => {
    return (
        <div className="flex w-full gap-3">
            <ReturnCallButton {...returnCall} />
            <RestartGameButton {...restartGame} />
        </div>
    );
};
