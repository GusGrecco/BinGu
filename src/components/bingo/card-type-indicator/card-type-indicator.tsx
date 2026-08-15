import { useBingoStore } from "@/store/bingo/store";
import { BINGO_CARD_TYPES } from "@/types";
import { BINGO_CARD_TYPE_LABELS } from "@/constants";

export const CardTypeIndicator = () => {
    const cardType = useBingoStore((state) => state.gameState.cardType);

    return (
        <div className="flex w-full flex-col items-start gap-2">
            <h3 className="text-xs text-text-secondary">Tipo de cartela</h3>
            <div className="flex flex-wrap gap-2" role="list">
                {BINGO_CARD_TYPES.map((type) => {
                    const isActive = type === cardType;
                    return (
                        <span
                            key={type}
                            role="listitem"
                            aria-current={isActive ? "true" : undefined}
                            className={
                                isActive
                                    ? "rounded-md bg-surface px-3 py-1 text-xs font-bold text-accent"
                                    : "rounded-md px-3 py-1 text-xs text-text-secondary"
                            }
                        >
                            {BINGO_CARD_TYPE_LABELS[type]}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};
