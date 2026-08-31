import type { StatItemProps } from "./types";

export const StatItem = ({ label, value, emphasized = false }: StatItemProps) => {
    const displayValue = value ?? "—";

    if (emphasized) {
        return (
            <div className="flex w-full flex-col items-start gap-0 rounded-md bg-surface p-2 select-none">
                <h3 className="text-xs text-accent">{label}</h3>
                <p className="text-[26px] font-bold text-accent">{displayValue}</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-start gap-0 select-none">
            <h3 className="text-xs text-text-secondary">{label}</h3>
            <p className="text-[26px] font-bold text-text-primary">{displayValue}</p>
        </div>
    );
};
