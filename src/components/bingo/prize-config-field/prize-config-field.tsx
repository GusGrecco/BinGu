import { useRef } from "react";
import { ImagePlus, X } from "lucide-react";
import { useObjectUrl } from "@/hooks/use-object-url";
import type { PrizeConfigFieldProps } from "./types";

export const PrizeConfigField = ({ name, image, onNameChange, onImageChange }: PrizeConfigFieldProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const previewUrl = useObjectUrl(image);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onImageChange(event.target.files?.[0] ?? null);
    };

    const handleRemove = () => {
        onImageChange(null);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
                <label htmlFor="prizeName" className="text-xs text-text-secondary">
                    Nome do prêmio
                </label>
                <input
                    id="prizeName"
                    type="text"
                    value={name}
                    onChange={(event) => onNameChange(event.target.value)}
                    className="rounded-md border border-line bg-surface p-2 text-sm text-text-primary"
                />
            </div>

            <div className="flex flex-col gap-1">
                <span className="text-xs text-text-secondary">Imagem do prêmio</span>

                {previewUrl ? (
                    <div className="relative w-full overflow-hidden rounded-md" style={{ aspectRatio: "16 / 9" }}>
                        <img
                            src={previewUrl}
                            alt="Pré-visualização do prêmio"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute right-2 top-2 flex gap-2">
                            <button
                                type="button"
                                onClick={() => inputRef.current?.click()}
                                aria-label="Substituir imagem"
                                className="rounded-md bg-surface/90 p-1.5 text-text-primary hover:text-accent"
                            >
                                <ImagePlus aria-hidden="true" className="h-4 w-4" />
                            </button>
                            <button
                                type="button"
                                onClick={handleRemove}
                                aria-label="Remover imagem"
                                className="rounded-md bg-surface/90 p-1.5 text-text-primary hover:text-red-600"
                            >
                                <X aria-hidden="true" className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <button
                        type="button"
                        onClick={() => inputRef.current?.click()}
                        style={{ aspectRatio: "16 / 9" }}
                        className="flex w-full flex-col items-center justify-center gap-1 rounded-md border border-dashed border-line bg-surface text-text-secondary hover:border-accent hover:text-accent"
                    >
                        <ImagePlus aria-hidden="true" className="h-5 w-5" />
                        <span className="text-xs">Selecionar imagem</span>
                    </button>
                )}

                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                />
            </div>
        </div>
    );
};
