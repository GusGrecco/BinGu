import type { ReactNode } from "react";

interface SidebarSectionProps {
    children: ReactNode;
    withDivider?: boolean;
}

export const SidebarSection = ({ children, withDivider = false }: SidebarSectionProps) => {
    return (
        <div
            className={
                withDivider
                    ? "flex flex-col items-start gap-2 border-t border-[color:var(--color-border)] pt-4"
                    : "flex flex-col items-start gap-2"
            }
        >
            {children}
        </div>
    );
};
