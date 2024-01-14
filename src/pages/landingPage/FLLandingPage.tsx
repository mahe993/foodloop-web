import FLBento from '../../layouts/bento/FLBento';
import FLHeaderWithSearch from '../../layouts/headerWithSearch/FLHeaderWithSearch';
import FLPage from '../base/FLPage';

export default function FLLandingPage(): JSX.Element {
    return (
        <FLPage sx={{ bgcolor: 'white' }}>
            {/* Search should maybe be tied to header */}
            <FLHeaderWithSearch />
            <FLBento sx={{ marginBlockEnd: 'auto', paddingBlockStart: '20svh' }} />
        </FLPage>
    );
}
