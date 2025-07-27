import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserContext } from './Context';

export const UserDataContext = createContext();

export function UserDataProvider({ children }) {
    const [userData, setUserData] = useState({
        user: '',
        email: '',
        transactions: [],
        notifications: [],
        balance: '',
        plan: '',
        refs: '',
        totalFunding: '',
        totalSpent: '',
        refBonus: ''
    });
    return (
        <UserDataContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserDataContext.Provider>
    )
}