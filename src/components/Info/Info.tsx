import React from 'react'
import './Info.css'
import useAppContext from '../../hooks/UseContext'

import { IInfo } from '../../interfaces/app.interfaces'

const Info = ({ title, des, btn, ancla, contact }: IInfo) => {
    const { state, setState } = useAppContext()
    return (
        <section>
            <h2 id={ancla}>{title}</h2>
            <div className={state.theme === 'light' ? 'light inner' : 'dark inner'}>
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
                                        className={state.theme === 'light' ? 'light contact-me ' : 'dark contact-me '}
                                        href={x.url}
                                    >
                                        {x.name}
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