import { useEffect, useState } from 'react';

// Custom hook for refreshing the component
export default function useRefresh(duration: number): number {
    const [refreshCount, setRefreshCount] = useState<number>(0);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        let timeoutId: NodeJS.Timeout;

        const refreshComponent = (): void => {
            // Set up interval to refresh the component every second
            intervalId = setInterval(() => {
                setRefreshCount(prevCount => prevCount + 1);
            }, 1000);

            // Set up timeout to clear the interval after totalDuration
            timeoutId = setTimeout(() => {
                clearInterval(intervalId);
            }, duration);
        };

        // Start refreshing the component when the component mounts
        refreshComponent();

        // Cleanup function to clear the interval and timeout when the component unmounts
        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, [duration]); // Re-run effect if totalDuration changes

    return refreshCount;
}
