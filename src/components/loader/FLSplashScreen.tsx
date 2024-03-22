import React, { useEffect, useState } from 'react';
import FLBox from '../box/FLBox';
import { Box, useTheme } from '@mui/material';
import Slide from '@mui/material/Slide';
import PandaIcon from '../../assets/svgs/PandaIcon';
import { keyframes } from '@emotion/react';
import { smallBoldText } from '../../themes/typography';

type SplashScreenProps = {
    pageLoading: boolean;
    duration?: number;
};

export default function SplashScreen({ pageLoading = true, duration = 1000 }: SplashScreenProps): JSX.Element {
    const [display, setDisplay] = useState(true);
    const [showSplash, setShowSplash] = useState(true);
    const [animate, setAnimate] = useState(false);

    const theme = useTheme();

    useEffect(() => {
        if (!pageLoading) {
            setAnimate(true);
        }
    }, [pageLoading]);

    useEffect(() => {
        if (animate && !pageLoading) {
            (async (): Promise<void> => {
                await new Promise(resolve =>
                    setTimeout(() => {
                        setShowSplash(false);
                        resolve('Promise resolved');
                    }, 1500),
                );
                return;
            })();
        }
    }, [animate, pageLoading]);

    const onTransitionComplete = async (d: number): Promise<void> => {
        await new Promise(resolve => setTimeout(() => resolve('Promise resolved'), d));
        setDisplay(false);
    };

    const classes = useStyles();

    return (
        <FLBox sx={{ ...classes.root, maxWidth: theme.breakpoints.values.tablet, display: display ? 'flex' : 'none' }}>
            <Slide
                direction="right"
                in={showSplash}
                appear={false}
                unmountOnExit
                addEndListener={() => onTransitionComplete(duration)}
                easing={{ exit: theme.transitions.easing.easeInOut }}
                timeout={1000}
            >
                <Box
                    sx={{
                        width: '50vw',
                        height: '100%',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        backgroundColor: 'black',
                    }}
                >
                    <FLBox
                        sx={{
                            position: 'relative',
                            top: 50,
                            transform: 'translateX(50%)',
                            width: 'min-content',
                            whiteSpace: 'nowrap',
                            ...smallBoldText,
                            animation: animate ? `${fade} 2s 1` : undefined,
                            animationFillMode: 'forwards',
                        }}
                    >
                        Getting ready...
                    </FLBox>
                </Box>
            </Slide>

            <Slide
                direction="left"
                in={showSplash}
                appear={false}
                unmountOnExit
                addEndListener={() => onTransitionComplete(duration)}
                easing={{ exit: theme.transitions.easing.easeInOut }}
                timeout={duration}
            >
                <Box
                    sx={{
                        width: '50vw',
                        height: '100%',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        backgroundColor: 'black',
                    }}
                >
                    <FLBox
                        sx={{
                            animation: animate ? `${spin} 2s 1` : undefined,
                            animationFillMode: 'forwards',
                            transformOrigin: 'left',
                        }}
                    >
                        <PandaIcon
                            circular
                            width="50"
                            sx={{
                                position: 'relative',
                                right: '50%',
                            }}
                        />
                    </FLBox>
                </Box>
            </Slide>
        </FLBox>
    );
}

type StylesType = {
    root: React.CSSProperties;
};

const useStyles = (): StylesType => ({
    root: {
        position: 'absolute',
        top: 0,
        width: '100vw',
        height: '100svh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1300, // Ensure splash screen is above other content
    },
});

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const fade = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;