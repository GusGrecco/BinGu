import { z } from "zod";
import { BINGO_CARD_TYPES } from "@/types";

const MAX_PRIZE_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

export const gameSetupSchema = z.object({
    cardType: z.enum(BINGO_CARD_TYPES, {
        message: "Selecione um tipo de cartela válido.",
    }),
    prizeName: z
        .string()
        .trim()
        .max(80, "O nome do prêmio deve ter no máximo 80 caracteres."),
    prizeImage: z
        .instanceof(File)
        .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
            message: "A imagem deve ser JPG, PNG, WEBP ou GIF.",
        })
        .refine((file) => file.size <= MAX_PRIZE_IMAGE_SIZE, {
            message: "A imagem deve ter no máximo 5MB.",
        })
        .nullable(),
});

export type GameSetupFormValues = z.infer<typeof gameSetupSchema>;
