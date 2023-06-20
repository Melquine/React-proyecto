import React from 'react'
import useAppContext from '../../hooks/UseContext'
import './Footer.css'

const Footer = () => {
    const {state, setState} = useAppContext()
  return (
    <footer>
        <div className={ state.theme === 'light' ? 'light__theme footer' : 'dark__theme footer'}>
            <p>Designed & built by Melquicedec Núñez</p>
        </div>
    </footer>
  )
}

export default Footer