import React from 'react'
import useAppContext from '../../hooks/UseContext'
import './Intro.css'
import { useVisilbe } from '../../hooks/UseVisible'
function Intro() {
  const {state, setState} = useAppContext()
  const { visible, myRef } = useVisilbe()

  return (
    <section>
      <div className='intro'>
        <h1>Hello,
          <br />
          <span className={ 
            state.theme === 'light' && visible ? 'typing light' :
            state.theme === 'dark' && visible ? 'typing dark' : ''

            } ref={myRef} >I'm Melquicedec</span>
        </h1>
        <span>Web developer...</span>
      </div>
    </section>
  )
}

export default Intro