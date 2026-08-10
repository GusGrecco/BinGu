import type { ReactNode } from "react";

export interface ModalProps {
    open: boolean;
    title: string;
    onClose: () => void;
    children: ReactNode;
    actions?: ReactNode;
    closeOnOverlayClick?: boolean;
}
