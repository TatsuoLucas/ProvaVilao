import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicial from './pages/inicial'
import Consultar from './pages/consultar'
import Cadastrar from './pages/cadastrar'


export default function Paths() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicial/>}/>
            <Route path='/cadastrar' element={<Cadastrar/>}/>
            <Route path='/consulta' element={<Consultar/>}/>
        </Routes>
    </BrowserRouter>
  )
}
