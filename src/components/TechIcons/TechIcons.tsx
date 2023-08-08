import { data } from './data'
import useAppContext from '../../hooks/UseContext'
import './TechIcons.css'

const TechIcons = () => {
    const { state, setState } = useAppContext()

    return (
        <div className="tech-incons inner" id={state.theme}>
            {
                data.map((tech, index: number) =>
                (<div key={tech.name}>
                    <img src={tech.img} alt={tech.name} title={tech.name}/>
                    {/* <span>{tech.name}</span> */}
                </div>))
            }
        </div>
    )
}

export default TechIcons