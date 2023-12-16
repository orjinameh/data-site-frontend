import React, { createContext, useState } from 'react';

export const UserContext =  createContext();

export function UserProvider ({children}) {
    const firmName = "LOREM";
    const refLink = "LOREM";
    const backendBaseUrl = 'https://datasite-h33s.onrender.com'
    // const backendBaseUrl = 'http://localhost:4000'
    const [menuBarState, setMenuBarState] = useState('-120%');
    return(
        <UserContext.Provider value={{menuBarState, setMenuBarState, firmName, refLink, backendBaseUrl}}>
            {children}
        </UserContext.Provider>
    )
}