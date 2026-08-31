import { ZoomableImage } from "@/components/ui";
import { useState, type ReactNode } from "react";

interface PrizeImageProps {
    imageUrl: string | null;
    alt: string;
    moreImageActions?: ReactNode;
}

export const PrizeImage = ({ imageUrl, alt, moreImageActions }: PrizeImageProps) => {
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
                <span className="text-xs select-none">Sem imagem</span>
            </div>
        );
    }

    return <ZoomableImage src={imageUrl} alt={alt} onError={() => setFailedToLoad(true)} moreActions={moreImageActions} />;
};
