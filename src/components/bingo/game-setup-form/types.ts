export type { GameSetupFormValues } from "@/lib/validation/game-setup-schema";
import type { GameSetupFormValues } from "./types";

export interface GameSetupFormProps {
    initialValues?: GameSetupFormValues;
    onSubmit: (values: GameSetupFormValues) => void;
    onCancel?: () => void;
}

export type GameSetupFormErrors = Partial<Record<keyof GameSetupFormValues, string>>;
