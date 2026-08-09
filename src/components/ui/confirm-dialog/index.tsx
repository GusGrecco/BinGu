import { useEffect } from "react";
import type { ConfirmDialogProps } from "./types";

export const ConfirmDialog = ({
    open,
    title,
    description,
    confirmLabel = "Confirmar",
    cancelLabel = "Cancelar",
    destructive = false,
    onConfirm,
    onCancel,
}: ConfirmDialogProps) => {
    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onCancel();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, onCancel]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={onCancel}
        >
            <div
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="confirm-dialog-title"
                aria-describedby="confirm-dialog-description"
                onClick={(event) => event.stopPropagation()}
                className="w-full max-w-sm rounded-md border border-line bg-surface p-5"
            >
                <div className="items-start flex flex-col gap-2">
                <h2 id="confirm-dialog-title" className="text-base font-bold text-text-primary">
                    {title}
                </h2>
                <p id="confirm-dialog-description" className="mt-2 text-sm text-text-secondary text-start">
                    {description}
                </p>                    
                </div>
                <div className="mt-5 flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="rounded-md border border-line px-4 py-2 text-sm font-bold text-text-primary transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                    >
                        {cancelLabel}
                    </button>
                    <button
                        type="button"
                        onClick={onConfirm}
                        autoFocus
                        className={
                            destructive
                                ? "rounded-md border border-error bg-error px-4 py-2 text-sm font-bold text-surface transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-error focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                                : "rounded-md border border-accent bg-accent px-4 py-2 text-sm font-bold text-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                        }
                    >
                        {confirmLabel}
                    </button>
                </div>
            </div>
        </div>
    );
};
