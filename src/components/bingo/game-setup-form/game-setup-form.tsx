import { useState } from "react";
import { PrizeConfigField, CardTypeSelect } from "@/components/bingo";
import { DEFAULT_BINGO_CARD_TYPE } from "@/constants";
import { gameSetupSchema } from "@/lib/validation/game-setup-schema";
import type { GameSetupFormErrors, GameSetupFormProps, GameSetupFormValues } from "./types";

const DEFAULT_FORM_VALUES: GameSetupFormValues = {
    cardType: DEFAULT_BINGO_CARD_TYPE,
    prizeName: "",
    prizeImage: null,
};

export const GameSetupForm = ({
    initialValues = DEFAULT_FORM_VALUES,
    onSubmit,
    onCancel,
}: GameSetupFormProps) => {
    const [formValues, setFormValues] = useState<GameSetupFormValues>(initialValues);
    const [errors, setErrors] = useState<GameSetupFormErrors>({});

    const updateField = <K extends keyof GameSetupFormValues>(field: K, value: GameSetupFormValues[K]) => {
        setFormValues((previous) => ({ ...previous, [field]: value }));
        setErrors((previous) => ({ ...previous, [field]: undefined }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const result = gameSetupSchema.safeParse(formValues);

        if (!result.success) {
            const fieldErrors: GameSetupFormErrors = {};
            for (const issue of result.error.issues) {
                const field = issue.path[0] as keyof GameSetupFormValues;
                if (!fieldErrors[field]) {
                    fieldErrors[field] = issue.message;
                }
            }
            setErrors(fieldErrors);
            return;
        }

        setErrors({});
        onSubmit(result.data);
    };

    return (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <CardTypeSelect
                value={formValues.cardType}
                onChange={(cardType) => updateField("cardType", cardType)}
                error={errors.cardType}
            />

            <PrizeConfigField
                name={formValues.prizeName}
                image={formValues.prizeImage}
                onNameChange={(prizeName) => updateField("prizeName", prizeName)}
                onImageChange={(prizeImage) => updateField("prizeImage", prizeImage)}
                nameError={errors.prizeName}
                imageError={errors.prizeImage}
            />

            <div className="flex justify-end gap-3 pt-2">
                <button
                    type="button"
                    onClick={onCancel}
                    className="rounded-md border border-line px-4 py-2 text-sm font-bold text-text-primary hover:border-accent hover:text-accent"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="rounded-md border border-accent bg-accent px-4 py-2 text-sm font-bold text-surface"
                >
                    Iniciar jogo
                </button>
            </div>
        </form>
    );
};