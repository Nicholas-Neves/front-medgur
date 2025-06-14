import Header from '../components/Header'
import BannerPrincipal from '../components/BannerPrincipal'
import Politica from '../components/Politica'
import Politica_da_Empresa from '../components/Politica_da_Empresa'
import Dados from '../components/Dados'
import RequisitosDoBrasil from '../components/Requisitos_do_Brasil'
import PoliticaAplica from '../components/Politica_Aplica'
import Alteracoes from '../components/Alteracoes'
import Footer from '../components/Footer'

function Politica_Privacidade() {
  return (
    <>
    <Header />
    <BannerPrincipal />
    <Politica />
    <Politica_da_Empresa />
    <Dados />
    <RequisitosDoBrasil />
    <PoliticaAplica />
    <Alteracoes />
    <Footer />
    
    </>
  )
}

export default Politica_Privacidade