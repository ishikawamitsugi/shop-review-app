import React, {createContext} from 'react'
import {User} from '../type/user';

type UserContext = {
    user?: User;
    setUser: (user?: User) => void
}

export const UserContext = createContext<UserContext>({
    user: undefined,
    setUser: () => {}
})