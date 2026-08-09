export const generateNumberRange = (min: number, max: number): number[] => {
    const length = max - min + 1;
    return Array.from({ length }, (_, index) => min + index);
};
