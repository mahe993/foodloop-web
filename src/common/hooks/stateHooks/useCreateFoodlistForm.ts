import { useState } from 'react';

type useCreateFoodlistForm = {
    formValues: formValues;
    setFormValues: (t: Partial<formValues>) => void;
    validateForm: () => boolean;
};

type formValues = {
    query: string;
    recurringDay: string;
    recurringTime: string;
};
export default function useCreateFoodlistForm(): useCreateFoodlistForm {
    const [formValues, setFormValues] = useState<formValues>({
        query: '',
        recurringDay: '',
        recurringTime: '',
    });

    const changeFormValues = (newValues: Partial<formValues>): void => {
        setFormValues(prev => ({ ...prev, ...newValues }));
    };

    const validateForm = (): boolean => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const [_, value] of Object.entries(formValues)) {
            if (value === '') {
                return false;
            }
        }
        return true;
    };

    return { formValues, setFormValues: changeFormValues, validateForm };
}
