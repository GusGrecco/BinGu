import { BINGO_CARD_TYPES } from "@/types";
import { BINGO_CARD_TYPE_LABELS } from "@/constants";
import type { CardTypeSelectProps } from "./types";

export const CardTypeSelect = ({ value, onChange }: CardTypeSelectProps) => {
    return (
        <div className="flex flex-col gap-1">
            <span id="card-type-label" className="text-xs text-text-secondary">
                Tipo de cartela
            </span>
            <div role="radiogroup" aria-labelledby="card-type-label" className="flex flex-wrap gap-2">
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
                                    ? "rounded-md bg-accent px-3 py-1.5 text-xs font-bold text-surface"
                                    : "rounded-md border border-line bg-surface px-3 py-1.5 text-xs text-text-secondary hover:border-accent hover:text-accent"
                            }
                        >
                            {BINGO_CARD_TYPE_LABELS[type]}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
