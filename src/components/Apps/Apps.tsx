import React from 'react'
import { IProps } from '../../interfaces/app.interfaces'
import useAppContext from '../../hooks/UseContext'
import './Apps.css'

const Apps = ({title, url, des, img, tools}: IProps) => {
  const {state, setState} = useAppContext()
  return (
    <div className={state.theme === 'light' ? 'light__theme row inner-projects' : 'dark__theme row inner-projects'} id={state.theme}>
      <div className='col-sm-12 col-md-6 col-lg-6'>

        <h3>{title}</h3>
        <div>
          <p>{des}</p>
        </div>
        <div className='tools'>
          {tools.map(tool => <span className={state.theme === 'light' ? 
                                              'light__theme__tools tools_technology' :
                                              'dark__theme__tools tools_technology' 
                                              } key={tool}>{tool}
                              </span>)}
          <a target='_blank'  href={url}><span className={state.theme === 'light' ? 'light__color bi bi-git' : 'dark__color bi bi-git'}></span></a>
        </div>

      </div>

      <div className='col-sm-12 col-md-6 col-lg-6'>

        <div className='img-cont'>
          <img src={img} alt={title} />
        </div>

      </div>

    </div>
  )
}

export default Apps