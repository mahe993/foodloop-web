/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { User } from '../common/hooks/stateHooks/types';
import { getRandomID, newAbortSignal } from '../common/utils/utils';
import { getUser } from '../api/user/read';

type UserContext = User;

const UserCtx = createContext<UserContext>({ id: 0, name: '' });

export default function UserContextProvider({ children }: { children: ReactNode }): JSX.Element {
    const [user, setUser] = useState<User>({ id: 0, name: '' });

    const getAndSetUser = async (id: number): Promise<void> => {
        try {
            const usr = await getUser(newAbortSignal(), { userID: id });
            setUser(usr);
        } catch (e) {
            setUser({ id: 1, name: 'Error connecting ...' });
            console.log(e);
        }
    };

    useEffect(() => {
        // fetch user data
        const id = getRandomID(14);
        getAndSetUser(id);
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
