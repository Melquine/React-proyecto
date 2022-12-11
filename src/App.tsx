import Navbar from './components/Navbar/Navbar'
import { AppContext } from './context/AppContext'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <AppContext>
        <Navbar />
        <Main />
        <Footer />
    </AppContext>

  )
}

export default App
