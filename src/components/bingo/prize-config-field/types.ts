export interface PrizeConfigFieldProps {
    name: string;
    image: File | null;
    onNameChange: (name: string) => void;
    onImageChange: (image: File | null) => void;
}
