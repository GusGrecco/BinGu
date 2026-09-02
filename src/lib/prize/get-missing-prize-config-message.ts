import type { GameSetupFormValues } from "../validation/game-setup-schema";

export const getMissingPrizeConfigMessage = (values: GameSetupFormValues): string | null => {
    const hasPrizeName = values.prizeName.trim().length > 0;
    const hasPrizeImage = values.prizeImage !== null;

    if (!hasPrizeName && !hasPrizeImage) {
        return "Nenhum prêmio ou imagem foi configurado para esta rodada.";
    }

    if (!hasPrizeName) {
        return "Uma imagem foi configurada, mas nenhum nome de prêmio foi definido.";
    }

    if (!hasPrizeImage) {
        return "Um prêmio foi configurado, mas nenhuma imagem foi definida.";
    }

    return null;
};
