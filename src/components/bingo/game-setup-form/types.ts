import type { GameSetupFormValues } from "./types";
export type { GameSetupFormValues } from "@/lib/validation/game-setup-schema";

export interface GameSetupFormProps {
    initialValues?: GameSetupFormValues;
    onSubmit: (values: GameSetupFormValues) => void;
    onCancel: () => void;
}

export type GameSetupFormErrors = Partial<Record<keyof GameSetupFormValues, string>>;
