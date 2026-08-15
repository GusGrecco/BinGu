export const revokePrizeImageUrl = (imageUrl: string | null): void => {
    if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
    }
};
