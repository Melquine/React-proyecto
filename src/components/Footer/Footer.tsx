import React from 'react'
import useAppContext from '../../hooks/UseContext'
import './Footer.css'

const Footer = () => {
    const {state, setState} = useAppContext()
  return (
    <footer>
        <div className={ state.theme === 'light' ? 'light footer' : 'dark footer'}>
            <p>© 2022 Melquicedec Núñez</p>
        </div>
    </footer>
  )
}

export default Footer