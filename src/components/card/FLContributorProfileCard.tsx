import { SxProps, useTheme } from '@mui/material';
import FLBox from '../box/FLBox';
import FLImageBox from '../image/FLImageBox';
import { smallText } from '../../themes/typography';
import GitHubIcon from '@mui/icons-material/GitHub';

type FLContributorProfileCardProps = {
    name: string;
    role: string;
    ghURL: string;
    profilePicURL?: string;
    sx?: SxProps;
};

export function FLContributorProfileCard({
    name,
    role,
    ghURL,
    profilePicURL = 'src/assets/images/foodloop.png',
    sx,
}: FLContributorProfileCardProps): JSX.Element {
    const theme = useTheme();
    return (
        <FLBox
            sx={{
                border: 1,
                borderColor: 'lightgrey',
                borderRadius: '10px',
                width: '100%',
                height: '12svh',
                paddingBlock: '2%',
                paddingInline: '4%',
                ...sx,
            }}
        >
            <FLImageBox boxHeight="100%" boxWidth="100%" imgHeight="100%" imgSrc={profilePicURL} sx={{ flex: 0.2 }} />
            <FLBox sx={{ flexDirection: 'column', flex: 0.8, height: '100%', gap: '4%' }}>
                <FLBox sx={{ ...smallText }}>{name}</FLBox>
                <FLBox sx={{ ...smallText }}>{role}</FLBox>
                <FLBox sx={{ ...smallText }}>
                    <a
                        href={ghURL}
                        rel="noopener noreferrer"
                        style={{
                            color: theme.palette.foodloop.main,
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}
                        target="_blank"
                    >
                        <GitHubIcon />
                    </a>
                </FLBox>
            </FLBox>
        </FLBox>
    );
}
