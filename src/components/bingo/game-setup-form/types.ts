import type { BingoCardType } from "@/types";

export interface GameSetupFormValues {
    cardType: BingoCardType;
    prizeName: string;
    prizeImage: File | null;
}

export interface GameSetupFormProps {
    initialValues?: GameSetupFormValues;
    onSubmit: (values: GameSetupFormValues) => void;
    onCancel: () => void;
}
