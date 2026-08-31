import { BINGO_CARD_TYPES } from "@/types";
import { BINGO_CARD_TYPE_LABELS } from "@/constants";
import type { CardTypeSelectProps } from "./types";

export const CardTypeSelect = ({ value, onChange, error }: CardTypeSelectProps) => {
    return (
        <div className="flex flex-col gap-1">
            <span id="card-type-label" className="text-left select-none text-xs text-text-secondary">
                Tipo de cartela
            </span>
            <div
                role="radiogroup"
                aria-labelledby="card-type-label"
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "card-type-error" : undefined}
                className="flex flex-wrap gap-2"
            >
                {BINGO_CARD_TYPES.map((type) => {
                    const isSelected = type === value;

                    return (
                        <button
                            key={type}
                            type="button"
                            role="radio"
                            aria-checked={isSelected}
                            onClick={() => onChange(type)}
                            className={
                                isSelected
                                    ? "cursor-pointer select-none rounded-md bg-accent px-3 py-1.5 text-xs font-bold text-surface"
                                    : "cursor-pointer select-none rounded-md border border-line bg-surface px-3 py-1.5 text-xs text-text-secondary hover:border-accent hover:text-accent"
                            }
                        >
                            {BINGO_CARD_TYPE_LABELS[type]}
                        </button>
                    );
                })}
            </div>
            {error && (
                <p id="card-type-error" role="alert" className="text-left text-xs text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
};
