import FLSearch from '../../layouts/search/FLSearch';
import FLPage from '../base/FLPage';

export default function LandingPage(): JSX.Element {
    return (
        <FLPage sx={{ bgcolor: 'white' }}>
            {/* Search should maybe be tied to header */}
            <FLSearch />
        </FLPage>
    );
}
