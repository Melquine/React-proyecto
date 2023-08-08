import React, { useEffect, useRef } from "react";
import  useAppContext  from "./UseContext"
// import handleMenu from "./handleMenu";

import {IState} from '../types/types' 

/* interface Menu {
    handleMenu: (show:boolean, setShow:IState) => void
} */


const closeMenuOnClick = (show:boolean, setShow: IState) => {
    const refOne = useRef<HTMLDivElement>(null)
    const { state, setState } = useAppContext()

    useEffect(() => {

        const closeMenu = ({ target }: MouseEvent): void => {

            if (!refOne.current?.contains(target as Node) && show) {

                setShow(false)

                setState({
                    ...state,
                    blur: false
                })
                handleMenu(show, setShow)
            } else {

            }
        }
        document.addEventListener('click', closeMenu, false)
        return () => {
            document.removeEventListener('click', closeMenu, false)
        }
    }, [state]);

    const handleMenu = (show:boolean, setShow:IState) => {
        setShow(!show)
        setState({
            ...state,
            blur: !state.blur
        })
    }

    return { refOne }

}

export default closeMenuOnClick