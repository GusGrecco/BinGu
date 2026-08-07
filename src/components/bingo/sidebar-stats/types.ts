import type { BingoGameState } from "@/types";

export interface SidebarStatsProps {
    gameState: BingoGameState;
}

export interface StatItemProps {
    label: string;
    value: string | null;
    emphasized?: boolean;
}
