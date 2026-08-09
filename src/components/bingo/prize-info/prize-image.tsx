import { useState } from "react";

interface PrizeImageProps {
    imageUrl: string | null;
    alt: string;
}

export const PrizeImage = ({ imageUrl, alt }: PrizeImageProps) => {
    const [failedToLoad, setFailedToLoad] = useState(false);

    const showPlaceholder = !imageUrl || failedToLoad;

    if (showPlaceholder) {
        return (
            <div
                role="img"
                aria-label={alt}
                className="flex w-full items-center justify-center rounded-md bg-surface text-text-secondary"
                style={{ aspectRatio: "16 / 9" }}
            >
                <span className="text-xs">Sem imagem</span>
            </div>
        );
    }

    return (
        <img
            src={imageUrl}
            alt={alt}
            onError={() => setFailedToLoad(true)}
            className="w-full rounded-md object-cover"
            style={{ aspectRatio: "16 / 9" }}
        />
    );
};
