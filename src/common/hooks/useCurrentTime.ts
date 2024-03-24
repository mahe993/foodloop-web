import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

type useCurrentTime = {
    now: dayjs.Dayjs;
};

export default function useCurrentTime(): useCurrentTime {
    // Initialize state to hold the current time
    const [currentTime, setCurrentTime] = useState(dayjs());

    // Effect to update the current time every second
    useEffect(() => {
        // Function to update the current time
        const updateTime = (): void => {
            setCurrentTime(dayjs()); // Update current time
        };

        // Interval to update the current time every second
        const intervalId = setInterval(updateTime, 1000);

        // Clear interval on component unmount
        return (): void => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once

    return { now: currentTime };
}
