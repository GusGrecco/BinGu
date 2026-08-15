import { useState } from "react";
import { BINGO_CARD_TYPES, type BingoCardType } from "@/types";
import { BINGO_CARD_TYPE_LABELS, DEFAULT_BINGO_CARD_TYPE } from "@/constants";
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
            <div className="flex flex-col gap-1">
                <label htmlFor="cardType" className="text-xs text-text-secondary">
                    Tipo de cartela
                </label>
                <select
                    id="cardType"
                    value={formValues.cardType}
                    onChange={(event) =>
                        setFormValues((previous) => ({
                            ...previous,
                            cardType: event.target.value as BingoCardType,
                        }))
                    }
                    className="rounded-md border border-line bg-surface p-2 text-sm text-text-primary"
                >
                    {BINGO_CARD_TYPES.map((type) => (
                        <option key={type} value={type}>
                            {BINGO_CARD_TYPE_LABELS[type]}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="prizeName" className="text-xs text-text-secondary">
                    Nome do prêmio
                </label>
                <input
                    id="prizeName"
                    type="text"
                    value={formValues.prizeName}
                    onChange={(event) =>
                        setFormValues((previous) => ({ ...previous, prizeName: event.target.value }))
                    }
                    className="rounded-md border border-line bg-surface p-2 text-sm text-text-primary"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="prizeImage" className="text-xs text-text-secondary">
                    Imagem do prêmio
                </label>
                <input
                    id="prizeImage"
                    type="file"
                    accept="image/*"
                    onChange={(event) =>
                        setFormValues((previous) => ({
                            ...previous,
                            prizeImage: event.target.files?.[0] ?? null,
                        }))
                    }
                    className="text-sm text-text-secondary"
                />
            </div>

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
