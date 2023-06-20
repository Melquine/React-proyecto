import { useEffect, useRef, useState } from "react"

export const useVisilbe = () => {
    const myRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState<Boolean>(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setVisible(entry.isIntersecting)
        })
        
        if(myRef.current) {
            observer.observe(myRef.current)
        }
        
    }, [])

    return { visible, myRef }
}