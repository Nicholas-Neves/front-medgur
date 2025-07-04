import Conteudo from "../components/Conteudo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner_conteudo_2 from '../components/Banner_conteudo_2'
import Jogar_cupons from '../components/Jogar_cupons'
import Velho_cupons from '../components/Velho_cupons'

export default function Home() {
    return (
        <main>
            <Header />
            <Conteudo />
            <Banner_conteudo_2 />
            <Jogar_cupons />
            <Velho_cupons />
            <Footer />
        </main>
    );
}