import { useEffect } from "react";
import { X } from "lucide-react";
import type { ModalProps } from "./types";

export const Modal = ({
    open,
    title,
    onClose,
    children,
    actions,
    closeOnOverlayClick = true,
}: ModalProps) => {
    useEffect(() => {
        if (!open) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, onClose]);

    if (!open) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={closeOnOverlayClick ? onClose : undefined}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                onClick={(event) => event.stopPropagation()}
                className="flex max-h-[90vh] w-full max-w-md flex-col rounded-md border border-line bg-surface"
            >
                <div className="flex items-center justify-between border-b border-line p-4">
                    <h2 id="modal-title" className="text-base font-bold text-text-primary">
                        {title}
                    </h2>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Fechar"
                        className="rounded-md p-1 text-text-secondary hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                        <X aria-hidden="true" className="h-5 w-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4">{children}</div>

                {actions && (
                    <div className="flex justify-end gap-3 border-t border-line p-4">{actions}</div>
                )}
            </div>
        </div>
    );
};
