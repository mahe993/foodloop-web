/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useState } from 'react';

type ErrorSnackbarContext = {
    open: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const ErrSnackbarCtx = createContext<ErrorSnackbarContext>({ open: false });

export default function ErrorSnackbarProvider({ children }: { children: ReactNode }): JSX.Element {
    const [open, setOpen] = useState(false);

    return <ErrSnackbarCtx.Provider value={{ open, setOpen }}>{children}</ErrSnackbarCtx.Provider>;
}

export function useErrorSnackbar(): ErrorSnackbarContext {
    const context = useContext(ErrSnackbarCtx);

    if (context === undefined) {
        throw new Error('useErrorSnackbar must be used within ErrorSnackbarProvider');
    }

    return context;
}
