import type { NumberButtonProps } from "./types";

export const NumberButton = ({ number, isDrawn = false, disabled = false, onClick }: NumberButtonProps) => {
    const isDisabled = disabled || isDrawn;

    const stateClasses = isDrawn
        ? "bg-accent text-surface border-transparent"
        : "bg-surface text-text-primary border-line hover:border-accent hover:text-accent active:scale-95";

    return (
        <button
            type="button"
            disabled={isDisabled}
            aria-pressed={isDrawn}
            aria-label={`Número ${number}${isDrawn ? ", já sorteado" : ""}`}
            onClick={() => onClick?.(number)}
            className={`aspect-square rounded-md border text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-100 ${stateClasses}`}
        >
            {number}
        </button>
    );
};
