/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useState } from 'react';

type SnackbarContext = {
    open: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const SnackbarCtx = createContext<SnackbarContext>({ open: false });

export default function SnackbarProvider({ children }: { children: ReactNode }): JSX.Element {
    const [open, setOpen] = useState(false);

    return <SnackbarCtx.Provider value={{ open, setOpen }}>{children}</SnackbarCtx.Provider>;
}

export function useSnackbar(): SnackbarContext {
    const context = useContext(SnackbarCtx);

    if (context === undefined) {
        throw new Error('useSnackbar must be used within SnackbarProvider');
    }

    return context;
}
