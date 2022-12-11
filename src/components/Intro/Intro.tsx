import React from 'react'
import useAppContext from '../../hooks/UseContext'
import './Intro.css'
function Intro() {
  const {state, setState} = useAppContext()

  return (
    <section>
      <div className={ state.theme === 'light' ? 'light intro' : 'dark intro'}>
        <h1>Hello,
          <br />
          <span>I'm Melquicedec</span></h1>
        <span>Web developer...</span>
      </div>
    </section>
  )
}

export default Intro