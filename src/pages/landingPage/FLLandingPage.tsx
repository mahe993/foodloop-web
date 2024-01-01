import { getContributors } from '../../common/utils/utils';
import { FLContributorProfileCard } from '../../components/card/FLContributorProfileCard';
import FLDataTray from '../../layouts/datatray/FLDataTray';
import FLBento from '../../layouts/bento/FLBento';
import FLHeaderWithSearch from '../../layouts/headerWithSearch/FLHeaderWithSearch';
import FLPage from '../base/FLPage';

export default function LandingPage(): JSX.Element {
    const CONTRIBUTORS = getContributors();

    return (
        <FLPage sx={{ bgcolor: 'white' }}>
            {/* Search should maybe be tied to header */}
            <FLHeaderWithSearch />
            <FLBento sx={{ marginBlockEnd: 'auto', paddingBlockStart: '20svh' }} />
            <FLDataTray sx={{ marginBlockStart: '4%' }} title="Contributors">
                {CONTRIBUTORS.map(contributor => (
                    <FLContributorProfileCard
                        ghURL={contributor.ghURL}
                        key={contributor.name}
                        name={contributor.name}
                        profilePicURL={contributor?.profilePicURL}
                        role={contributor.role}
                    />
                ))}
            </FLDataTray>
        </FLPage>
    );
}
