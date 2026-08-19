import type { ReactNode } from "react";

interface SidebarProps {
    children?: ReactNode;
}

export const Sidebar = ({ children }: SidebarProps) => {
    return (
        <aside
            aria-label="Painel de controle do sorteio"
            className="fixed z-49 flex w-full shrink-0 flex-col gap-6 overflow-y-auto bg-blue-project border-b border-line p-4 text-text-primary lg:h-screen lg:w-64 lg:border-b-0"
        >
            {children}
        </aside>
    );
};
