import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GithubCorner from './components/shared/GithubCorner'
import Background from './components/shared/Background'
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'
import About from './pages/About'
import Index from './pages/Index'
import Show from './pages/Show'

function App() {
    return (
        <div>
            <Router>
                <Background />
                <GithubCorner />
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Index />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/profile/:username' element={<Show />}></Route>
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App
