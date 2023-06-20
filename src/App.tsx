import Navbar from './components/Navbar/Navbar'
import { AppContext } from './context/AppContext'
import useAppContext from './hooks/UseContext'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Loading from './components/Loading/Loading'

import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true)


  function handleLoading() {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)

  }

  useEffect(() => {
    if(document.readyState === 'complete') {
      handleLoading()
     }else {
      window.addEventListener('load', handleLoading);
     }


    return () => window.removeEventListener('load', handleLoading)
  }, [])

  return !isLoading ? (
    // <Loading />
    <AppContext>
        <Navbar />
        <Main />
        <Footer />
    </AppContext>

  ) : (<Loading />);
}

export default App
