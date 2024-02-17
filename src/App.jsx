
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import SingleProduct from './components/SingleProduct/SingleProduct'
import MenProduct from './components/HomeProduct/MenProduct'
import WomenProduct from './components/HomeProduct/WomenProduct'
import KidsProduct from './components/HomeProduct/KidsProduct'
import About from './components/About/About'

function App() {

  return (
    <div data-theme='cupcake'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/single-product/:id' element={<SingleProduct />} />
          <Route path='/mens' element={<MenProduct/>}/>
          <Route path='/womens' element={<WomenProduct/>}/>
          <Route path='/kids' element={<KidsProduct/>}/>
          <Route path='/route' element={<KidsProduct/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
