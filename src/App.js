import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/layout/Navbar"
import Breadcrumbs from './components/layout/Breadcrumbs' 
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Look from './pages/Look'
import Looks from './pages/Looks'
import Model from './pages/Model'
import Models from './pages/Models'
import Guide from './pages/Guide'
import Guides from './pages/Guides'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Router>
        <div className='flex flex-col'>
          <Navbar />
          <Breadcrumbs />
          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/look' element={<Look />} />
              <Route path='/looks' element={<Looks />} />
              <Route path='/model' element={<Model />} />
              <Route path='/models' element={<Models />} />
              <Route path='/guide' element={<Guide />} />
              <Route path='/guides' element={<Guides />} />
              {/* <Route path='/user/:login' element={<User />} /> */}
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />  
            </Routes>
          </main>
          <Footer />
      </div>
    </Router>
  </>
  );
}

export default App;
