import type { BingoPrize } from "@/types";
import type { GameSetupFormValues } from "@/lib/validation/game-setup-schema";

export const createPrizeFromSetup = (
    values: Pick<GameSetupFormValues, "prizeName" | "prizeImage">,
): BingoPrize => ({
    name: values.prizeName.trim(),
    imageUrl: values.prizeImage ? URL.createObjectURL(values.prizeImage) : null,
});
