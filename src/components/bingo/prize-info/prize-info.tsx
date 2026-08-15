import { useBingoStore } from "@/store/bingo/store";
import { PrizeImage } from "./prize-image";

export const PrizeInfo = () => {
    const prize = useBingoStore((state) => state.gameState.prize);
    const hasPrize = Boolean(prize.name || prize.imageUrl);

    if (!hasPrize) {
        return (
            <div className="flex w-full flex-col items-start gap-2">
                <h3 className="text-xs text-text-secondary">Prêmio da rodada</h3>
                <p className="text-sm text-text-secondary">Nenhum prêmio definido</p>
            </div>
        );
    }

    const alt = prize.name ? `Imagem do prêmio: ${prize.name}` : "Prêmio da rodada";

    return (
        <div className="flex w-full flex-col items-start gap-2">
            <h3 className="text-xs text-text-secondary">Prêmio da rodada</h3>
            <PrizeImage key={prize.imageUrl} imageUrl={prize.imageUrl} alt={alt} />
            <p className="text-sm font-bold text-text-primary">{prize.name || "Prêmio sem nome"}</p>
        </div>
    );
};
