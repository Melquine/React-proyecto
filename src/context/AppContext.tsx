import { createContext, useState } from 'react'

export const UserContext = createContext<any>({})

export const AppContext = ({ children }: any) => {
    const [state, setState] = useState({ blur: false, theme: 'dark' })

    return (
        <UserContext.Provider value={{ state, setState }}>
            {children}
        </UserContext.Provider>

    )
}