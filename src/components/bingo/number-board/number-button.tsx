import { Check } from "lucide-react";
import type { NumberButtonProps } from "./types";

export const NumberButton = ({
    number,
    isDrawn = false,
    isCurrent = false,
    disabled = false,
    onClick,
}: NumberButtonProps) => {
    const isDisabled = disabled || isDrawn;

    const stateClasses = isCurrent
        ? "bg-surface text-accent border-2 border-accent"
        : isDrawn
            ? "bg-accent text-surface border-transparent"
            : "bg-transparent text-text-primary border-line hover:border-accent hover:text-accent active:scale-95";

    const statusLabel = isCurrent ? ", chamada atual" : isDrawn ? ", já sorteado" : "";

    return (
        <button
            type="button"
            disabled={isDisabled}
            aria-pressed={isDrawn}
            aria-label={`Número ${number}${statusLabel}`}
            onClick={() => onClick?.(number)}
            className={`relative flex aspect-square min-h-[3.2rem] items-center justify-center rounded-md border text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-100 ${stateClasses}`}
        >
            {number}
            {isDrawn && !isCurrent && (
                <Check
                    aria-hidden="true"
                    className="absolute right-0.5 top-0.5 h-3 w-3"
                />
            )}
        </button>
    );
};
