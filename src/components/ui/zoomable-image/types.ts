import type { ReactNode } from "react";

export interface ZoomableImageProps {
    src: string;
    alt: string;
    aspectRatio?: string;
    onError?: () => void;
    moreActions?: ReactNode;
}
