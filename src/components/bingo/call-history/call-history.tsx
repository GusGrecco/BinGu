import { getCallHistory } from "@/store/bingo";
import type { BingoGameState } from "@/types";
import { CallHistoryItem } from "./call-history-item";

interface CallHistoryProps {
    gameState: BingoGameState;
    className?: string;
}

export const CallHistory = ({ gameState, className }: CallHistoryProps) => {
    const calledNumbers = getCallHistory(gameState);
    const lastIndex = calledNumbers.length - 1;
    const hasCalls = calledNumbers.length > 0;

    return (
        <section
            aria-label="Histórico de chamadas"
            className={`flex w-full flex-col gap-2 border-t border-line pt-3 xl:h-full xl:flex-shrink-0 xl:border-l xl:border-t-0 xl:pl-4 xl:pt-0 ${className ?? ""}`}
        >
            <h2 className="text-xs text-text-secondary">Histórico de chamadas</h2>
            {hasCalls ? (
                <ol className="flex flex-wrap gap-1 overflow-y-auto">
                    {calledNumbers.map((call, index) => (
                        <CallHistoryItem key={call.value} call={call} isCurrent={index === lastIndex} />
                    ))}
                </ol>
            ) : (
                <p className="text-sm text-text-secondary">Nenhum número sorteado ainda</p>
            )}
        </section>
    );
};
