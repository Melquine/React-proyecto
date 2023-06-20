import React from 'react'
import './Skills.css'
import useAppContext from '../../hooks/UseContext'

function Skills() {
    const {state, setState} = useAppContext()
    const skills = ['HTML','CSS', 'JavaScript', 'Angular', 'React.js', 'TypeScript']

  return (
    <section>
    <h2 id='skills'>Skills</h2>
    <div className={ state.theme === 'light' ? 'light__theme inner' : 'dark__theme inner'}>
        <div>
            <p>Not only was I in charge of creating web pages, 
                I was able to take the role of designing the page
                completely to the extent that each client requests 
                using the most up-to-date and most popular technologies
                that the market offers, delivering a better experience
                and performance.
            </p>
        </div>
        <div>
            <ul>
                {skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
        </div>
    </div>
</section>
  )
}

export default Skills