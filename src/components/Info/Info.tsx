import React from 'react'
import './Info.css'
import useAppContext from '../../hooks/UseContext'

import { IInfo } from '../../interfaces/app.interfaces'

const Info = ({ title, des, btn, ancla, contact }: IInfo) => {
    const { state, setState } = useAppContext()
    return (
        <section>
            <h2 id={ancla}>{title}</h2>
            <div className={state.theme === 'light' ? 'light__bg inner' : 'dark__bg inner'}>
                <div>
                    <p>{des}</p>
                </div>
                {
                    btn ?
                        <div className='contact'>
                            {
                                contact?.map(x => (
                                    <a
                                        key={x.name}
                                        target='_blank'
                                        className={state.theme === 'light' ? 'contact-me light__color' : 'dark__color contact-me '}
                                        href={x.url}
                                    >
                                    <i className={x.icon}></i>
                                    <span>{x.name}</span>    
                                    </a>
                                ))
                            }

                        </div>
                        : null
                }
            </div>
        </section>
    )
}

export default Info