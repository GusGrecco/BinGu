import type { CallHistoryItemProps } from "./types";

export const CallHistoryItem = ({ call, isCurrent = false }: CallHistoryItemProps) => {
    const stateClasses = isCurrent
        ? "bg-accent text-surface border-2 border-text-primary"
        : "bg-surface text-text-primary border-line";

    return (
        <li
            aria-current={isCurrent ? "true" : undefined}
            className={`flex h-8 min-w-8 flex-shrink-0 items-center justify-center rounded-full border px-2 text-xs font-bold ${stateClasses}`}
        >
            {call.value}
        </li>
    );
};
