import { Undo2 } from "lucide-react";
import type { ReturnCallButtonProps } from "./types";

export const ReturnCallButton = ({ disabled = false, onClick }: ReturnCallButtonProps) => {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            aria-label="Retornar última chamada"
            className="flex flex-1 items-center justify-center gap-2 rounded-md border border-line bg-transparent px-4 py-2 text-sm font-bold text-text-primary transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:border-line disabled:text-text-secondary disabled:hover:bg-line disabled:hover:text-text-secondary select-none"
        >
            <Undo2 aria-hidden="true" className="h-4 w-4" />
            Retornar chamada
        </button>
    );
};
