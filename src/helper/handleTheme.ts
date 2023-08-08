import React, { useEffect } from "react";
import  useAppContext  from "../hooks/UseContext"

const changeTheme = () => {
    const { state, setState } = useAppContext()
    useEffect(() => {
        if (state.theme === 'light') {
            document.body.classList.add('light__theme');
        } else {
            document.body.classList.add('dark__theme');
        }

        return () => {
            document.body.classList.remove('light__theme');
            document.body.classList.remove('dark__theme');
        }


    }, [state.theme])
}

export default changeTheme