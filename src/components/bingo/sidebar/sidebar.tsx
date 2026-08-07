import type { ReactNode } from "react";

interface SidebarProps {
    children?: ReactNode;
}

export const Sidebar = ({ children }: SidebarProps) => {
    return (
        <aside
            aria-label="Painel de controle do sorteio"
            className="flex h-screen w-64 shrink-0 flex-col gap-6 overflow-y-auto p-4 text-[color:var(--color-text-primary)]"
        >
            {children}
        </aside>
    );
};
