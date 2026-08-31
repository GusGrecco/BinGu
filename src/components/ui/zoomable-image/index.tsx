import { useEffect, useRef } from "react";
import { RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import { useImageZoom } from "@/hooks/use-image-zoom";
import type { ZoomableImageProps } from "./types";
import { useImagePan } from "@/hooks/use-image-pan";

export const ZoomableImage = (
    { src, alt, aspectRatio = "16 / 9", onError, moreActions }: ZoomableImageProps
) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const {
        zoom,
        zoomIn,
        zoomOut,
        resetZoom,
        canZoomIn,
        canZoomOut,
        isDefaultZoom,
    } = useImageZoom();

    const {
        position,
        isDragging,
        startDrag,
        drag,
        endDrag,
        resetPosition,
    } = useImagePan();

    useEffect(() => {
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
        <div
            ref={containerRef}
            className="group relative w-full select-none overflow-hidden rounded-md"
            style={{ aspectRatio }}
        >
            <img
                src={src}
                alt={alt}
                draggable={false}
                onError={onError}
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
                        ? "cursor-default h-full w-full object-contain transition-transform duration-200 ease-out"
                        : isDragging
                            ? "cursor-grabbing h-full w-full object-contain transition-transform duration-200 ease-out"
                            : "cursor-grab h-full w-full object-contain transition-transform duration-200 ease-out"
                }
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                }}
            />

            {!isDefaultZoom && (
                <span
                    className="
            absolute bottom-2 left-2
            rounded-md bg-surface/90
            px-2 py-1
            text-xs text-text-secondary
        "
                >
                    {Math.round(zoom * 100)}%
                </span>
            )}

            <div
                className="
                    pointer-events-none
                    absolute bottom-2 right-2
                    flex items-center gap-1
                    opacity-0
                    transition-opacity duration-200
                    group-hover:pointer-events-auto
                    group-hover:opacity-100
                "
            >
                {moreActions}

                <div className="rounded-md bg-surface/80 p-1">
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
        </div>
    );
};
