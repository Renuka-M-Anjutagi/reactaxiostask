import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Update from './components/Update'
import Delete from './components/Delete'
import Read from './components/Read'
import Create from './components/Create'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/delete' element={<Delete />}> </Route>
          <Route path='/update/:id' element={<Update />}> </Route>
          <Route path='/read/:id' element={<Read />}> </Route>

      </Routes>
    </BrowserRouter>
 
  )
}

export default App
