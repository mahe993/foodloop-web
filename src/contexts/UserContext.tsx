/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { User } from '../common/hooks/stateHooks/types';
import { getContributors, newAbortSignal } from '../common/utils/utils';
import { getUser } from '../api/user/read';

type UserContext = User;

const UserCtx = createContext<UserContext>({ id: 0, name: '' });

export default function UserContextProvider({ children }: { children: ReactNode }): JSX.Element {
    const [user, setUser] = useState<User>({ id: 0, name: '' });

    useEffect(() => {
        // fetch user data
        const { id } = getContributors()[0];
        try {
            (async (): Promise<void> => {
                const usr = await getUser(newAbortSignal(), { userID: id });
                setUser(usr);
            })();
        } catch (e) {
            console.log(e);
        }
    }, []);

    return <UserCtx.Provider value={user}>{children}</UserCtx.Provider>;
}

export function useUserContext(): UserContext {
    const context = useContext(UserCtx);

    if (context === undefined) {
        throw new Error('useUserContext must be used within UserContextProvider');
    }

    return context;
}
