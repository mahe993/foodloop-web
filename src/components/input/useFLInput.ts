import React, { useState } from 'react';

type UseFLInput = {
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function useFLInput(): UseFLInput {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target?.value);
    };

    return {
        value,
        handleChange,
    };
}
