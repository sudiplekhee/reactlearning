import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom' 
import Home from './pages/Home'
import Singlepage from './pages/Singlepage'
import Createpage from './pages/Createpage'
import Editpage from './pages/Editpage'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/singlepage' element={<Singlepage/>}/>
    <Route path='/createpage' element={<Createpage/>}/>
    <Route path='/editpage' element={<Editpage/>}/>
   </Routes>
   </BrowserRouter>

    
  )
}

export default App
