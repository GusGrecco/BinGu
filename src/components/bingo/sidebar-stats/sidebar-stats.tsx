import { useBingoStore } from "@/store/bingo/store";
import { getCurrentCall, getPreviousCall, getTotalCalls } from "@/store/bingo";
import { BINGO_MAX_NUMBER } from "@/constants";
import { StatItem } from "./stat-item";

export const SidebarStats = () => {
    const gameState = useBingoStore((state) => state.gameState);
    const currentCall = getCurrentCall(gameState);
    const previousCall = getPreviousCall(gameState);
    const totalCalls = getTotalCalls(gameState);

    return (
        <div className="flex w-full flex-col items-start gap-5">
            <StatItem label="Total de chamadas" value={`${totalCalls} / ${BINGO_MAX_NUMBER}`} />
            <StatItem label="Última chamada" value={previousCall ? String(previousCall.value) : null} />
            <StatItem
                label="Chamada atual"
                value={currentCall ? String(currentCall.value) : null}
                emphasized
            />
        </div>
    );
};
