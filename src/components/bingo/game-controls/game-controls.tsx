import { useState } from "react";
import { ReturnCallButton } from "./return-call-button";
import { RestartGameButton } from "./restart-game-button";
import { ConfirmDialog } from "@/components/ui";

interface GameControlsProps {
    totalCalls: number;
    onUndoLastCall: () => void;
    onResetGame: () => void;
}

export const GameControls = ({ totalCalls, onUndoLastCall, onResetGame }: GameControlsProps) => {
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    const handleConfirmRestart = () => {
        onResetGame();
        setIsConfirmOpen(false);
    };

    return (
        <div className="flex w-full gap-3 md:max-w-146">
            <ReturnCallButton disabled={totalCalls === 0} onClick={onUndoLastCall} />
            <RestartGameButton disabled={totalCalls === 0} onClick={() => setIsConfirmOpen(true)} />

            <ConfirmDialog
                open={isConfirmOpen}
                title="Reiniciar jogo?"
                description="Todos os números sorteados serão apagados. Essa ação não pode ser desfeita."
                confirmLabel="Reiniciar"
                destructive
                onConfirm={handleConfirmRestart}
                onCancel={() => setIsConfirmOpen(false)}
            />
        </div>
    );
};
