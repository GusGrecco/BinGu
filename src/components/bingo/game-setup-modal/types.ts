import type { ReactNode } from "react";

export interface GameSetupModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
    actions?: ReactNode;
    dismissible?: boolean;
}
