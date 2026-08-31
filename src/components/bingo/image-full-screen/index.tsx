import { useImagePan } from "@/hooks/use-image-pan";
import { useImageZoom } from "@/hooks/use-image-zoom";
import { RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";
import React from "react";

interface FullScreenProps {
    onClose: () => void;
    isClosed: boolean;
    imgSrc: string;
}

export const ImageFullScreen: React.FC<FullScreenProps> = ({
    onClose,
    isClosed,
    imgSrc
}) => {

    const {
        position,
        isDragging,
        startDrag,
        drag,
        endDrag,
        resetPosition,
    } = useImagePan();

    const containerRef = React.useRef<HTMLDivElement>(null);

    const { zoom, zoomIn, zoomOut, resetZoom, canZoomIn, canZoomOut, isDefaultZoom } = useImageZoom();

    React.useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (event: WheelEvent) => {
            event.preventDefault();
            if (event.deltaY < 0) {
                zoomIn();
            } else {
                zoomOut();
            }
        };

        container.addEventListener("wheel", handleWheel, { passive: false });
        return () => container.removeEventListener("wheel", handleWheel);
    }, [zoomIn, zoomOut]);

    React.useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (event: WheelEvent) => {
            event.preventDefault();

            if (event.deltaY < 0) {
                zoomIn();
            } else {
                zoomOut();
            }
        };

        container.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleWheel);
        };
    }, [zoomIn, zoomOut]);

    const handleResetZoom = () => {
        resetZoom();
        resetPosition();
    };

    return (
        isClosed ? (
            <div className="fixed inset-0 p-5 h-screen w-screen bg-black/50 flex flex-col gap-10">
                <div className="w-full flex justify-end">
                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            hover:text-red-500
                            hover:bg-error/30
                            rounded
                            transition-colors
                            p-1
                        "
                    >
                        <X />
                    </button>
                </div>
                <div className="flex justify-center align-center">
                    {imgSrc ? (
                        <img
                            src={imgSrc}
                            alt={"imagem do prêmio"}
                            draggable={false}
                            onMouseDown={(event) => {
                                if (!isDefaultZoom) {
                                    startDrag(event.clientX, event.clientY);
                                }
                            }}
                            onMouseMove={(event) => {
                                drag(event.clientX, event.clientY);
                            }}
                            onMouseUp={endDrag}
                            onMouseLeave={endDrag}

                            className={
                                isDefaultZoom
                                    ? "cursor-default object-contain transition-transform duration-200 ease-out"
                                    : isDragging
                                        ? "cursor-grabbing object-contain transition-transform duration-200 ease-out"
                                        : "cursor-grab object-contain transition-transform duration-200 ease-out"
                            }
                            style={{
                                transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                            }}
                        />) :
                        (
                            <p>nenhuma imagem encontrada.</p>
                        )
                    }

                </div>
                {!isDefaultZoom && (
                    <span
                        className="
                            absolute bottom-5 left-5
                            rounded-md bg-surface/90
                            px-2 py-1
                            text-xs text-text-secondary
                        "
                    >
                        {Math.round(zoom * 100)}%
                    </span>
                )}
                <div className="absolute bottom-5 right-5 flex items-center gap-1 rounded-md bg-surface/80 p-1">
                    <button
                        type="button"
                        onClick={zoomOut}
                        disabled={!canZoomOut}
                        aria-label="Diminuir zoom"
                        className="cursor-pointer rounded-md p-1.5 text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:text-accent disabled:cursor-not-allowed disabled:text-text-secondary disabled:hover:text-text-secondary"
                    >
                        <ZoomOut aria-hidden="true" className="h-4 w-4" />
                    </button>
                    <button
                        type="button"
                        onClick={handleResetZoom}
                        disabled={isDefaultZoom}
                        aria-label="Restaurar zoom padrão"
                        className="cursor-pointer rounded-md p-1.5 text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:text-accent disabled:cursor-not-allowed disabled:text-text-secondary disabled:hover:text-text-secondary"
                    >
                        <RotateCcw aria-hidden="true" className="h-4 w-4" />
                    </button>
                    <button
                        type="button"
                        onClick={zoomIn}
                        disabled={!canZoomIn}
                        aria-label="Aumentar zoom"
                        className="cursor-pointer rounded-md p-1.5 text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:text-accent disabled:cursor-not-allowed disabled:text-text-secondary disabled:hover:text-text-secondary"
                    >
                        <ZoomIn aria-hidden="true" className="h-4 w-4" />
                    </button>
                </div>
            </div>
        ) : null
    )
}
