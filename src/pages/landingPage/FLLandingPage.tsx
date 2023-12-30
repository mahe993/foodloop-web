import Bento from '../../layouts/bento/Bento';
import FLHeaderWithSearch from '../../layouts/headerWithSearch/FLHeaderWithSearch';
import FLPage from '../base/FLPage';

export default function LandingPage(): JSX.Element {
    return (
        <FLPage sx={{ bgcolor: 'white', paddingBlockStart: '20svh' }}>
            {/* Search should maybe be tied to header */}
            <FLHeaderWithSearch />
            <Bento sx={{ marginBlockEnd: 'auto' }} />
        </FLPage>
    );
}
