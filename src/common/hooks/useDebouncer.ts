import { useState, useEffect } from 'react';

type UseDebouncer = number | string;

export default function useDebouncer(value: number | string, delay: number): UseDebouncer {
    const [debouncedValue, setDebouncedValue] = useState<number | string>(value);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const debounceFunction = (): void => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
        };

        debounceFunction();

        return () => {
            clearTimeout(timeoutId);
        };
    }, [value, delay]);

    return debouncedValue;
}
