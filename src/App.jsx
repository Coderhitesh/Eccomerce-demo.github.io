
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div data-theme='cupcake'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
