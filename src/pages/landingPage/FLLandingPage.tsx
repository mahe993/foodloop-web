import { getContributors } from '../../common/utils/utils';
import { FLContributorProfileCard } from '../../components/card/FLContributorProfileCard';
import FLDataTray from '../../layouts/datatray/FLDataTray';
import FLBento from '../../layouts/bento/FLBento';
import FLHeaderWithSearch from '../../layouts/headerWithSearch/FLHeaderWithSearch';
import FLPage from '../base/FLPage';
import FLBox from '../../components/box/FLBox';
import { smallLightText } from '../../themes/typography';

export default function FLLandingPage(): JSX.Element {
    const CONTRIBUTORS = getContributors();

    return (
        <FLPage sx={{ bgcolor: 'white' }}>
            <FLHeaderWithSearch>
                <FLBox
                    sx={{
                        marginBlockStart: '4%',
                        paddingInline: '4%',
                        ...smallLightText,
                        fontStyle: 'italic',
                    }}
                >
                    This search is for demo purposes only.
                    <br />
                    Try out the search in Food loop feature!
                </FLBox>
            </FLHeaderWithSearch>
            <FLBento sx={{ marginBlockEnd: 'auto', paddingBlockStart: '20svh' }} />
            <FLDataTray sx={{ marginBlockStart: '4%' }} title="Contributors">
                {CONTRIBUTORS.map(contributor => (
                    <FLContributorProfileCard
                        ghURL={contributor.ghURL}
                        linkedinURL={contributor.linkedinURL}
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
