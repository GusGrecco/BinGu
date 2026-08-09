import { RotateCcw } from "lucide-react";
import type { RestartGameButtonProps } from "./types";

export const RestartGameButton = ({ disabled = false, onClick }: RestartGameButtonProps) => {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            aria-label="Reiniciar jogo"
            className="flex flex-1 items-center justify-center gap-2 rounded-md border border-line bg-surface px-4 py-2 text-sm font-bold text-red-600 transition-colors hover:border-red-600 hover:bg-red-600 hover:text-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:border-line disabled:text-text-secondary disabled:hover:bg-surface disabled:hover:text-text-secondary"
        >
            <RotateCcw aria-hidden="true" className="h-4 w-4" />
            Reiniciar jogo
        </button>
    );
};
