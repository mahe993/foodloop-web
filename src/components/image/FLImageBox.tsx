import FLBox from '../../layouts/box/FLBox';
import { SxProps } from '@mui/material';

type FLImageBoxProps = {
    boxWidth: string;
    boxHeight: string;
    imgSrc: string;
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
    sx,
}: FLImageBoxProps): JSX.Element {
    return (
        <FLBox
            sx={{
                alignSelf: 'flex-end',
                width: boxWidth,
                height: boxHeight,
                overflow: 'hidden',
                position: 'relative',
                ...sx,
            }}
        >
            <img
                alt="bento-item"
                src={imgSrc}
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
