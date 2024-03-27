import FLBox from '../../components/box/FLBox';
import { SxProps } from '@mui/material';

type FLImageBoxProps = {
    boxWidth: string;
    boxHeight: string;
    imgSrc: string;
    fallback?: string;
    sx?: SxProps;
} & (
    | {
          imgWidth: string;
          imgHeight?: string;
      }
    | {
          imgWidth?: string;
          imgHeight: string;
      }
);

export default function FLImageBox({
    boxWidth,
    boxHeight,
    imgSrc,
    imgWidth,
    imgHeight,
    fallback = '/assets/images/foodloop.png',
    sx,
}: FLImageBoxProps): JSX.Element {
    return (
        <FLBox
            sx={{
                width: boxWidth,
                height: boxHeight,
                overflow: 'hidden',
                position: 'relative',
                ...sx,
            }}
        >
            <img
                key={999}
                alt="foodloop-img"
                src={imgSrc}
                onError={e => {
                    const target = e.target as HTMLImageElement;
                    target.src = fallback;
                }}
                style={{
                    display: 'block',
                    height: imgHeight,
                    width: imgWidth,
                    objectFit: 'contain',
                    position: 'absolute',
                }}
            />
        </FLBox>
    );
}
