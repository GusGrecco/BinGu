import { useCallback, useState } from "react";

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.5;

export const useImageZoom = () => {
    const [zoom, setZoom] = useState(MIN_ZOOM);

    const zoomIn = useCallback(() => {
        setZoom((previous) => Math.min(previous + ZOOM_STEP, MAX_ZOOM));
    }, []);

    const zoomOut = useCallback(() => {
        setZoom((previous) => Math.max(previous - ZOOM_STEP, MIN_ZOOM));
    }, []);

    const resetZoom = useCallback(() => setZoom(MIN_ZOOM), []);

    return {
        zoom,
        zoomIn,
        zoomOut,
        resetZoom,
        canZoomIn: zoom < MAX_ZOOM,
        canZoomOut: zoom > MIN_ZOOM,
        isDefaultZoom: zoom === MIN_ZOOM,
    };
};
