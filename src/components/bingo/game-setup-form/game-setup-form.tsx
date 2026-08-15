import { useState } from "react";
import { PrizeConfigField, CardTypeSelect } from "@/components/bingo";
import { DEFAULT_BINGO_CARD_TYPE } from "@/constants/";
import type { GameSetupFormProps, GameSetupFormValues } from "./types";

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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(formValues);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <CardTypeSelect
                value={formValues.cardType}
                onChange={(cardType) => setFormValues((previous) => ({ ...previous, cardType }))}
            />

            <PrizeConfigField
                name={formValues.prizeName}
                image={formValues.prizeImage}
                onNameChange={(prizeName) => setFormValues((previous) => ({ ...previous, prizeName }))}
                onImageChange={(prizeImage) => setFormValues((previous) => ({ ...previous, prizeImage }))}
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
