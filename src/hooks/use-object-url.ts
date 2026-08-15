import React from "react";

export const useObjectUrl = (file: File | null): string | null => {
    const url = React.useMemo(() => (file ? URL.createObjectURL(file) : null), [file]);

    React.useEffect(() => {
        return () => {
            if (url) {
                URL.revokeObjectURL(url);
            }
        };
    }, [url]);

    return url;
};
