import { useState, useEffect } from 'react';

type UseHideOnScroll = {
    isHidden: boolean;
};

export default function useHideOnScroll(): UseHideOnScroll {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = (): void => {
            const currScrollPos = window.scrollY;

            if (currScrollPos > prevScrollPos) {
                // Scrolling down, hide the header
                setIsHidden(true);
            } else {
                // Scrolling up, reveal the header
                setIsHidden(false);
            }

            prevScrollPos = currScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { isHidden };
}
