import { useEffect, useState } from "react"

const showNavbar = () => {
    const [scroll, setScroll] = useState(true)

    useEffect(() => {
        let currentY = 0
        function mostrar() {
            const { scrollY } = window
            if (scrollY > currentY && scrollY > 80) {
                currentY = scrollY
                setScroll(false)

            } else if (scrollY <= currentY) {
                currentY = scrollY
                setScroll(true)
            }
        }
        window.addEventListener('scroll', mostrar, true)
    }, [])

    return [ scroll ]
}

export default showNavbar