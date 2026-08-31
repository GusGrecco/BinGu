import { RotateCcw } from "lucide-react";
import type { RestartGameButtonProps } from "./types";

export const RestartGameButton = ({ disabled = false, onClick }: RestartGameButtonProps) => {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            aria-label="Reiniciar jogo"
            className="flex flex-1 items-center justify-center gap-2 rounded-md border border-line bg-transparent px-4 py-2 text-sm font-bold text-error transition-colors hover:border-error hover:bg-error hover:text-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-error focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:border-line disabled:text-text-secondary disabled:hover:bg-line disabled:hover:text-text-secondary select-none"
        >
            <RotateCcw aria-hidden="true" className="h-4 w-4" />
            Reiniciar jogo
        </button>
    );
};
