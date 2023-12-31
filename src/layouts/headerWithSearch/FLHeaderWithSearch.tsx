import { useTheme } from '@mui/material';
import FLHeader from '../../components/header/FLHeader';
import FLSearch from '../../components/search/FLSearch';
import FLBox from '../../components/box/FLBox';

export default function FLHeaderWithSearch(): JSX.Element {
    const theme = useTheme();
    return (
        <FLBox
            sx={{
                flexDirection: 'column',
                position: 'fixed',
                top: 0,
                width: '100%',
                maxWidth: theme.breakpoints.values.tablet,
                zIndex: 1,
            }}
        >
            <FLHeader />
            <FLSearch />
        </FLBox>
    );
}
