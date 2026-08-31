import { useBingoStore } from "@/store/bingo/store";
import { getCallHistory } from "@/store/bingo";
import { CallHistoryItem } from "./call-history-item";

interface CallHistoryProps {
    className?: string;
}

export const CallHistory = ({ className }: CallHistoryProps) => {
    const gameState = useBingoStore((state) => state.gameState);
    const calledNumbers = getCallHistory(gameState);
    const lastIndex = calledNumbers.length - 1;
    const hasCalls = calledNumbers.length > 0;

    return (
        <section
            aria-label="Histórico de chamadas"
            className={`flex w-full flex-col gap-2 border-t border-line pt-3 xl:h-full xl:flex-shrink-0 xl:border-l xl:border-t-0 xl:pl-4 xl:pt-0 ${className ?? ""}`}
        >
            <h2 className="text-xs text-text-secondary select-none">Histórico de chamadas</h2>
            {hasCalls ? (
                <ol className="flex flex-wrap gap-1 overflow-y-auto select-none">
                    {calledNumbers.map((call, index) => (
                        <CallHistoryItem key={call.value} call={call} isCurrent={index === lastIndex} />
                    ))}
                </ol>
            ) : (
                <p className="text-sm text-text-secondary select-none">Nenhum número sorteado ainda</p>
            )}
        </section>
    );
};
