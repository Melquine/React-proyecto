import { useEffect, useRef, useState } from 'react'
import { MenuItems } from './MenuItems'
import useAppContext from '../../hooks/UseContext'
import { useVisilbe } from '../../hooks/UseVisible'
import screenSize from '../../helper/screenSize'
import changeTheme from '../../helper/handleTheme'
import closeMenuOnClick from '../../hooks/closeMenuOnClick'
import showNavbar from '../../hooks/showNavbar'


import './Navbar.css'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const [ scroll ] = showNavbar()
    const { state, setState } = useAppContext()
    const { refOne } = closeMenuOnClick(show, setShow)

    screenSize(show, setShow)
    changeTheme()

    useEffect(() => {
        document.body.classList.toggle('no-scroll', show);
    }, [show])

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

    return (
        <header className={scroll ? 'container-fluid' : 'hide'} id={state.theme}>
            <nav className={`container-md NavbarItems ${state.theme}`} ref={refOne}>
                <div className="navbar-logo"><img className='logo' src='./img/logo.png'></img></div>
                <div className="menu-icon" onClick={handleMenu}>
                    <i className={show ? 'bi bi-x-lg' : 'bi bi-list'}></i>
                </div>

                {/* mobil menu */}
                <div className={show ? `ul-cont active ${state.theme}` : `ul-cont ${state.theme}`}>

                    <div className='menu-cont'>
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

                        <a
                            href='./resume/Resume-Melquicede-Núñez-Escalante.pdf'
                            download='Resume-Melquicede-Núñez-Escalante.pdf'
                            className={state.theme === 'light' ? 'light resume' : 'dark resume'}
                        >
                            Resume
                        </a>
                    
                    
                        <button
                            onClick={handleTheme}
                            className={state.theme === 'light' ? 'light theme' : 'dark theme'}
                        >
                        {state.theme === 'light' ? 'Dark' : 'Light'}
                        </button>

                    </div>


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

                    <a
                        href='./resume/Resume-Melquicede-Núñez-Escalante.pdf'
                        download='Resume-Melquicede-Núñez-Escalante.pdf'
                        className={state.theme === 'light' ? 'light resume' : 'dark resume'}
                        >
                        Resume
                    </a>

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