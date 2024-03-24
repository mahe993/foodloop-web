import { useState } from 'react';

type useCallActions = {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    refreshFn: VoidFunction;
};

export default function useCallActions(): useCallActions {
    const [loading, setLoading] = useState<boolean>(true);

    const refreshFunc = (): void => {
        setLoading(true);
    };

    return {
        loading: loading,
        setLoading: setLoading,
        refreshFn: refreshFunc,
    };
}
