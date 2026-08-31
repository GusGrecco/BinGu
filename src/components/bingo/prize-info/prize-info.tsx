import { useBingoStore } from "@/store/bingo/store";
import { PrizeImage } from "./prize-image";
import { ImageFullScreen } from "../image-full-screen";
import React from "react";
import { Fullscreen } from "lucide-react";

export const PrizeInfo = () => {
    const prize = useBingoStore((state) => state.gameState.prize);
    const hasPrize = Boolean(prize.name || prize.imageUrl);
    const [onCloseFullScreen, setOnCloseFullScreen] = React.useState<boolean>(false);

    if (!hasPrize) {
        return (
            <div className="flex w-full flex-col items-start gap-2">
                <h3 className="text-xs text-text-secondary select-none">Prêmio da rodada</h3>
                <p className="text-sm text-text-secondary select-none">Nenhum prêmio definido</p>
            </div>
        );
    }

    const alt = prize.name ? `Imagem do prêmio: ${prize.name}` : "Prêmio da rodada";

    return (
        <>
            <div className="flex w-full flex-col items-start gap-2">
                <h3 className="text-xs text-text-secondary select-none">Prêmio da rodada</h3>
                <PrizeImage
                    key={prize.imageUrl}
                    imageUrl={prize.imageUrl}
                    alt={alt}
                    moreImageActions={(
                        <button
                            type="button"
                            onClick={() => setOnCloseFullScreen(true)}
                            aria-label="Abrir tela cheia"
                            className="cursor-pointer rounded-md p-1.5 text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:text-accent bg-surface/80 p-1"
                        >
                            <Fullscreen />
                        </button>
                    )}
                />
                <p className="text-sm font-bold text-text-primary select-none">{prize.name || "Prêmio sem nome"}</p>
            </div>
            <ImageFullScreen
                onClose={() => setOnCloseFullScreen(false)}
                isClosed={onCloseFullScreen}
                imgSrc={prize.imageUrl || ""}
            />
        </>

    );
};
