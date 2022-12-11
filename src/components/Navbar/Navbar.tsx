import { useEffect, useState } from 'react'
import { MenuItems } from './MenuItems'
import useAppContext from '../../hooks/UseContext'

import './Navbar.css'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const { state, setState } = useAppContext()

    useEffect(() => {
        document.body.classList.toggle('no-scroll', show);
    }, [show])

    useEffect(() => {
        if (state.theme === 'light') {
            document.body.classList.add('light');
        } else {
            document.body.classList.add('dark');
        }

        return () => {
            document.body.classList.remove('dark');
            document.body.classList.remove('light');
        }


    }, [state.theme])

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
        <header>
            <nav className="container-md NavbarItems">
                <div className="navbar-logo"><i className="bi bi-alexa"></i></div>
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