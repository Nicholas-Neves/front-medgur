import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sobre_Nos from './assets/pages/sobre_nos'
import Home from './assets/pages/home'
import Confirmar from './assets/pages/Confirmar'
import Profile from './assets/pages/Profile'
import Cupom from './assets/pages/cupom'
import Usuario from './assets/pages/usuario'
import Converter from './assets/pages/converter'
import Api from './assets/pages/leitorOcr/leitor'
import Descarte from './assets/pages/Descarte'
import Parceiros from './assets/pages/parceiros'
import Politica_Privacidade from './assets/pages/politica_privacidade'

function App() {
  return (
    <Router>
      <Api />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<Sobre_Nos />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/confirmar" element={<Confirmar />} />
        <Route path="/cupom" element={<Cupom />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/descarte" element={<Descarte />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/politica-privacidade" element={<Politica_Privacidade />} />
      </Routes>
    </Router>
  )
}

export default App