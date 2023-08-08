import React, { useEffect } from 'react'
import useAppContext from '../../hooks/UseContext'
import Apps from '../Apps/Apps'
import Intro from '../Intro/Intro'
import Skills from '../Skills/Skills'
import Info from '../Info/Info'

import { AboutUser, ContactUser } from '../Info/UserInfo'
import { AppsList } from '../Apps/Apps.list'
import './Main.css'
import TechIcons from '../TechIcons/TechIcons'

function Main() {
  const { state, setState } = useAppContext()
  
  return (
    <main className={state.blur ? 'container blur' : 'container'}>
      <Intro />

      {AboutUser.map(info =>
      (<Info
        key={info.title}
        ancla={info.ancla}
        title={info.title}
        des={info.des}
        btn={info.btn}
      />))}

      <Skills />
      <h2 id='apps' className='apps'>My apps</h2>
      {
        AppsList.map(app =>
        (<Apps
          key={app.title}
          title={app.title}
          url={app.url}
          des={app.des}
          img={app.img}
          tools={app.tools}
        />))
      }

      <h2 id='apps' className='apps'>Technologies</h2>
      <TechIcons />

      {ContactUser.map(info =>
      (<Info
        key={info.title}
        ancla={info.ancla}
        title={info.title}
        des={info.des}
        contact={info.contact}
        btn={info.btn}
      />))}


    </main>
  )
}

export default Main