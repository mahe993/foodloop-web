/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useState } from 'react';
import { Session } from '../common/hooks/stateHooks/types';

type SessionContext = {
    session: Session;
    setSession: React.Dispatch<React.SetStateAction<Session>>;
};

const SessionCtx = createContext<SessionContext>({
    session: {
        fuxSplash: true,
    },
    setSession: () => {},
});

export default function SessionContextProvider({ children }: { children: ReactNode }): JSX.Element {
    const [session, setSession] = useState<Session>({ fuxSplash: true });

    return <SessionCtx.Provider value={{ session, setSession }}>{children}</SessionCtx.Provider>;
}

export function useSessionContext(): SessionContext {
    const context = useContext(SessionCtx);

    if (context === undefined) {
        throw new Error('useSessionContext must be used within SessionContextProvider');
    }

    return context;
}
