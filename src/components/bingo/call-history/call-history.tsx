import type { BingoGameState } from "@/types";
import { CallHistoryItem } from "./call-history-item";
import { getCallHistory } from "@/store/bingo";

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
            className={`flex w-full flex-col gap-2 border-t border-line pt-3 ${className ?? ""}`}
        >
            <h2 className="text-xs text-text-secondary">Histórico de chamadas</h2>
            {hasCalls ? (
                <ol className="flex flex-wrap gap-2 overflow-y-auto">
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