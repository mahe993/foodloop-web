import { FLContributorProfileCard } from '../../components/card/FLContributorProfileCard';
import FLDataTray from '../../components/datatray/FLDataTray';
import FLBento from '../../layouts/bento/FLBento';
import FLHeaderWithSearch from '../../layouts/headerWithSearch/FLHeaderWithSearch';
import FLPage from '../base/FLPage';

export default function LandingPage(): JSX.Element {
    return (
        <FLPage sx={{ bgcolor: 'white' }}>
            {/* Search should maybe be tied to header */}
            <FLHeaderWithSearch />
            <FLBento sx={{ marginBlockEnd: 'auto', paddingBlockStart: '20svh' }} />
            <FLDataTray sx={{ marginBlockStart: '4%' }} title="Contributors">
                <FLContributorProfileCard
                    ghURL="https://github.com/mahe993/"
                    name="Quek Ma He"
                    role="Software Engineer"
                />
                <FLContributorProfileCard
                    ghURL="https://github.com/mahe993/"
                    name="Park Chae Seong"
                    role="Software Engineer"
                />
                <FLContributorProfileCard
                    ghURL="https://github.com/mahe993/"
                    name="Foo Chi Hen"
                    role="Software Engineer"
                />
            </FLDataTray>
        </FLPage>
    );
}
