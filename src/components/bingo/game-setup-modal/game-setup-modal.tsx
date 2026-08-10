import { Modal } from "@/components/ui";
import type { GameSetupModalProps } from "./types";

export const GameSetupModal = ({ open, onClose, children, actions }: GameSetupModalProps) => {
    return (
        <Modal open={open} onClose={onClose} title="Configurar novo jogo" actions={actions}>
            {children}
        </Modal>
    );
};
