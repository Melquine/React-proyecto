import React, { useState, useEffect } from "react";
import  useAppContext  from "../hooks/UseContext"

import { IState } from '../types/types' 
// React.Dispatch<React.SetStateAction<string>>

// type IState = React.Dispatch<React.SetStateAction<boolean>>


const screenSize = (show:boolean, setShow:IState) => {
    const { state, setState } = useAppContext()
    console.log('testeo...')
    useEffect(() => {

        const x = window.matchMedia('(min-width: 768px)')
        x.addEventListener('change', handleResize);

        function handleResize(e: MediaQueryListEvent) {
            if (state.blur && e.matches) {
                setState({
                    ...state,
                    blur: false
                })
                setShow(!show)
            }
        }
    })

}

export default screenSize