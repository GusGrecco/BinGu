import { useCallback, useRef, useState } from "react";

interface Position {
    x: number;
    y: number;
}

export const useImagePan = () => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const dragStart = useRef<Position>({ x: 0, y: 0 });
    const positionStart = useRef<Position>({ x: 0, y: 0 });

    const startDrag = useCallback(
        (x: number, y: number) => {
            setIsDragging(true);

            dragStart.current = { x, y };
            positionStart.current = position;
        },
        [position],
    );

    const drag = useCallback(
        (x: number, y: number) => {
            if (!isDragging) return;

            setPosition({
                x: positionStart.current.x + (x - dragStart.current.x),
                y: positionStart.current.y + (y - dragStart.current.y),
            });
        },
        [isDragging],
    );

    const endDrag = useCallback(() => {
        setIsDragging(false);
    }, []);

    const resetPosition = useCallback(() => {
        setPosition({ x: 0, y: 0 });
    }, []);

    return {
        position,
        isDragging,
        startDrag,
        drag,
        endDrag,
        resetPosition,
    };
};
