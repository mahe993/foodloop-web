import { CONTRIBUTORS } from '../../constants';
import { Contributer } from '../hooks/stateHooks/types';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);

export function defaultAction(logMsg: string): VoidFunction {
    return (): void => {
        console.log(logMsg);
    };
}

// getRandomID generates a random number between 1 - max inclusive
export function getRandomID(max: number): number {
    return Math.floor(Math.random() * max) + 1;
}

export function getContributors(): Contributer[] {
    return CONTRIBUTORS.sort(() => Math.random() - 0.5);
}

export async function waitTime(maxTime: number): Promise<string> {
    const wait = maxTime * 1000;
    return new Promise(resolve => setTimeout(() => resolve('Promise resolved'), wait));
}

// Function to create a dayjs object for the nearest future day of the week and time
export function getNearestTime(dayOfWeek: string, time: string): dayjs.Dayjs {
    if (!dayOfWeek || !time) {
        console.error('Invalid day of the week or time');
        return dayjs();
    }
    // Map day of the week to a numerical value (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
    const dayOfWeekMap: Record<string, number> = {
        sunday: 0,
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6,
    };

    // Convert the provided day of the week to lowercase
    const lowercaseDayOfWeek = dayOfWeek.toLowerCase();

    // If the provided day of the week is not in the map, it's invalid
    if (!(lowercaseDayOfWeek in dayOfWeekMap)) {
        console.error('Invalid day of the week');
        return dayjs();
    }

    // Get the target day index from the map
    const targetDayIndex = dayOfWeekMap[lowercaseDayOfWeek];

    // Get the current day of the week in SGT
    const currentDayIndexSGT = dayjs().tz('Asia/Singapore').day();

    // Calculate the difference in days to the target day of the week
    let daysToAdd = targetDayIndex - currentDayIndexSGT;

    // If daysToAdd is negative, add 7 days to get the nearest future day
    if (daysToAdd < 0) {
        daysToAdd += 7;
    }

    // Split the time string into hours and minutes
    const [hours, minutes] = time.split(':').map(Number);

    // Create a dayjs object representing today at the specified time in SGT and add the calculated days
    let nearestFutureTimeValue = dayjs()
        .tz('Asia/Singapore')
        .hour(hours)
        .minute(minutes)
        .second(0)
        .millisecond(0)
        .add(daysToAdd, 'day');

    // Check if the generated time is in the past relative to the current time
    if (nearestFutureTimeValue.isBefore(dayjs().tz('Asia/Singapore'))) {
        // If so, add 7 days to find the next occurrence in the future
        nearestFutureTimeValue = nearestFutureTimeValue.add(7, 'day');
    }

    return nearestFutureTimeValue;
}

// Function to get the time difference between two dayjs objects including days, formatted as days:hours:minutes:seconds
export function getTimeDifference(start: dayjs.Dayjs, end: dayjs.Dayjs): string {
    if (!end) return '0d 00h 00m 00s';

    // Get the duration between the two dayjs objects
    const duration = dayjs.duration(end.diff(start));

    // Extract days, hours, minutes, and seconds from the duration
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    // Format the time difference as days:hours:minutes:seconds
    const formattedDifference = `${days}d ${hours.toString().padStart(2, '0')}h ${minutes
        .toString()
        .padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;

    return formattedDifference;
}

export function newAbortSignal(timeoutMs?: number): AbortSignal {
    let timeout = timeoutMs;
    if (!timeoutMs) timeout = 100000;

    const abortController = new AbortController();
    setTimeout(() => {
        abortController.abort();
    }, timeout);

    return abortController.signal;
}

export function getFoodImg(category: string, index: number): string {
    const categoryMax: { [key: string]: number } = {
        pasta: 24,
        laksa: 13,
        'chicken rice': 22,
        burger: 24,
        biryani: 12,
    };

    let idx = index + 1;
    while (idx > categoryMax[category]) idx = idx - categoryMax[category];

    let cat = category;
    if (category === 'chicken rice') cat = 'chickenRice';

    return `/assets/images/food/${cat}/${idx}.jpg`;
}

export function getAlbumImg(category: string, index: number): string {
    const categoryMax: { [key: string]: number } = {
        pasta: 9,
        laksa: 7,
        'chicken rice': 8,
        burger: 8,
        biryani: 8,
    };

    let idx = index + 1;
    while (idx > categoryMax[category]) idx = idx - categoryMax[category];

    let cat = category;
    if (category === 'chicken rice') cat = 'chickenRice';
    return `/assets/images/album/${cat}/${idx}.jpg`;
}
