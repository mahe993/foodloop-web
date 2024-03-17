import FLBox from '../box/FLBox';
import AlbumIcon from '../icon/AlbumIcon';
import { albumTitle, smallBoldText } from '../../themes/typography';
import FLImageBox from '../image/FLImageBox';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type FLAlbumCoverProps = {
    id: number;
    title?: string;
    description?: string;
    imgURL?: string;
};

export default function FLAlbumCover({ id, title, description, imgURL = '' }: FLAlbumCoverProps): JSX.Element {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <FLBox
            onClick={() => {
                navigate(`/foodloop/${id}`);
            }}
            sx={{
                paddingBlock: '20%',
                width: '48%',
                aspectRatio: 1,
                marginBlockEnd: '4%',
                position: 'relative',
                flexDirection: 'column',
                overflow: 'hidden',
            }}
        >
            <FLImageBox
                boxWidth="100%"
                boxHeight="80%"
                imgHeight="100%"
                imgSrc={imgURL}
                fallback="src/assets/images/albumFallback2.png"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundColor: theme.palette.foodlist.main,
                }}
            />
            <FLBox
                sx={{
                    padding: '4%',
                    position: 'absolute',
                    bottom: 0,
                    maxHeight: '20%',
                    maxWidth: '100%',
                    height: '20%',
                    ...smallBoldText,
                    /** required for ellipsis */
                    width: '100%',
                    overflow: 'hidden',
                    display: 'block',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    /** required for ellipsis */
                }}
            >
                {description ?? 'Every <day>, at <time>'}
            </FLBox>

            <FLBox
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    marginBlockStart: '2%',
                    marginInlineStart: '2%',
                }}
            >
                <AlbumIcon />
            </FLBox>

            <FLBox
                sx={{
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    opacity: 1,
                    textTransform: 'uppercase',
                    ...albumTitle,
                    /** required for ellipsis */
                    width: '70%',
                    overflow: 'hidden',
                    display: 'block',
                    whiteSpace: 'normal',
                    textOverflow: 'ellipsis',
                    maxHeight: '2em', // Ensure a maximum height equivalent to two lines of text
                    lineHeight: '1em', // Set line height to prevent uneven line spacing
                    /** required for ellipsis */
                }}
            >
                {title ?? 'Title'}
            </FLBox>
        </FLBox>
    );
}
