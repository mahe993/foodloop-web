import { useState, useEffect, useRef } from 'react';

type UseHideOnScroll = {
    isHidden: boolean;
    scrollPosition: number;
};

export default function useHideOnScroll(): UseHideOnScroll {
    const scrollPosition = useRef(0);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = (): void => {
            const currScrollPos = window.scrollY;

            if (currScrollPos > prevScrollPos && currScrollPos > 50) {
                // Scrolling down, hide the header
                setIsHidden(true);
            } else {
                // Scrolling up, reveal the header
                setIsHidden(false);
            }

            prevScrollPos = currScrollPos;
        };

        const updateBoxTop = (): void => {
            const scrollY = window.scrollY;
            if (scrollY != scrollPosition.current) scrollPosition.current = scrollY;
        };

        window.addEventListener('scroll', () => {
            updateBoxTop();
            handleScroll();
        });

        return () => {
            window.removeEventListener('scroll', () => {
                updateBoxTop();
                handleScroll();
            });
        };
    }, []);

    return { isHidden, scrollPosition: scrollPosition.current };
}
