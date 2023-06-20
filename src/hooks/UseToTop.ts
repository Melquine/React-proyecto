import React, { useEffect} from "react"
export const useToTop = () => {
  useEffect(() => {
    if(window.scrollY) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  },[])

}