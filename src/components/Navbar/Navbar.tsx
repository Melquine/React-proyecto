import { useEffect, useRef, useState } from 'react'
import { MenuItems } from './MenuItems'
import useAppContext from '../../hooks/UseContext'
import { useVisilbe } from '../../hooks/UseVisible'

import './Navbar.css'

const Navbar = () => {
    const refOne = useRef<HTMLDivElement>(null)
    const [show, setShow] = useState(false)
    const [scroll, setScroll] = useState(true)
    const { state, setState } = useAppContext()

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

    useEffect(() => {
        document.body.classList.toggle('no-scroll', show);
    }, [show])

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

    useEffect(() => {

        const closeMenu = ({ target }: MouseEvent): void => {

            if (!refOne.current?.contains(target as Node) && show) {

                setShow(false)

                setState({
                    ...state,
                    blur: false
                })
                handleMenu()
            } else {

            }
        }
        document.addEventListener('click', closeMenu, false)
        return () => {
            document.removeEventListener('click', closeMenu, false)
        }
    }, [state]);

    const handleMenu = () => {
        setShow(!show)
        setState({
            ...state,
            blur: !state.blur
        })
    }

    const handleTheme = () => {

        setState({
            ...state,
            theme: state.theme === 'light' ? 'dark' : 'light'
        })

    }

    useEffect(() => {
        let currentY = 0
        function mostrar() {
            const { scrollY } = window
            if (scrollY > currentY && scrollY > 80) {
                currentY = scrollY
                setScroll(false)

            } else if (scrollY <= currentY) {
                currentY = scrollY
                setScroll(true)

            }

        }

        window.addEventListener('scroll', mostrar, true)
    }, [])


    return (
        <header className={scroll ? 'container-fluid' : 'hide'}>
            <nav className='container-md NavbarItems' ref={refOne}>
                <div className="navbar-logo"><img className='logo' src='./img/logo.png'></img></div>
                <div className="menu-icon" onClick={handleMenu}>
                    <i className={show ? 'bi bi-x-lg' : 'bi bi-list'}></i>
                </div>

                {/* mobil menu */}
                <div className={show ? `ul-cont active ${state.theme}` : `ul-cont ${state.theme}`}>
                    <ul className='nav-menu'>
                        {
                            MenuItems.map((item) => {
                                return (
                                    <li onClick={handleMenu} key={item.title}>
                                        <a className={item.cName} href={item.url}>{item.title}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <button
                        onClick={handleTheme}
                        className={state.theme === 'light' ? 'light theme' : 'dark theme'}
                    >
                        {state.theme === 'light' ? 'Dark' : 'Light'}
                    </button>

                </div>

                {/* PC menu */}
                <div className={`ul-cont-pc ${state.theme}`}>
                    <ul className='nav-menu-pc'>
                        {
                            MenuItems.map((item) => {
                                return (
                                    <li key={item.title}>
                                        <a className={item.cName} href={item.url}>{item.title}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <button
                        onClick={handleTheme}
                        className={state.theme === 'light' ? 'light theme' : 'dark theme'}
                    >
                        {state.theme === 'light' ? 'Dark' : 'Light'}
                    </button>
                </div>

            </nav>

        </header>

    )
}

export default Navbar