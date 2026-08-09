import { CallHistoryItem } from "./call-history-item";
import type { CallHistoryProps } from "./types";

export const CallHistory = ({ calledNumbers, className }: CallHistoryProps) => {
    const lastIndex = calledNumbers.length - 1;

    return (
        <section
            aria-label="Histórico de chamadas"
            className={`flex w-full flex-col gap-2 border-t border-line pt-3 ${className ?? ""}`}
        >
            <h2 className="text-xs text-text-secondary">Histórico de chamadas</h2>
            <ol className="flex flex-wrap gap-2 overflow-y-auto">
                {calledNumbers.map((call, index) => (
                    <CallHistoryItem key={call.value} call={call} isCurrent={index === lastIndex} />
                ))}
            </ol>
        </section>
    );
};
