import { useTheme } from '@mui/material';
import React, { forwardRef, ForwardedRef } from 'react';
import { smallBoldText } from '../../themes/typography';

type FLInputProps = {
    inputValue: string | number;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

function Input({ inputValue, handleChange, ...props }: FLInputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element {
    const theme = useTheme();

    return (
        <input
            onChange={e => {
                handleChange(e);
            }}
            ref={ref}
            style={{
                flex: 1,
                borderRadius: '10px',
                backgroundColor: '#F2F2F2',
                height: '100%',
                paddingInline: '4%',
                outline: 'none',
                caretColor: theme.palette.foodloop.main,
                color: 'black',
                ...smallBoldText,
            }}
            value={inputValue}
            {...props}
        />
    );
}

const FLInput = forwardRef(Input);
export default FLInput;
