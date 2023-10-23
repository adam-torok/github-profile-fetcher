import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import GithubCorner from './components/GithubCorner'
import About from './pages/About'
import Index from './pages/Index'
import Background from './components/Background'

function App() {
    return (
        <>
            <Router>
                <Background />
                <GithubCorner />
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Index />}></Route>
                    <Route path='/about' element={<About />}></Route>
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default App
