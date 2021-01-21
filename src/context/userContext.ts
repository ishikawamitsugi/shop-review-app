import React, {createContext} from 'react'
import {User} from '../type/user';

type UserContext = {
    user: User | null;
    setUser: (user : User | null) => void
}

export const UserContext = createContext<UserContext>({
    user: null,
    setUser: () => {}
})