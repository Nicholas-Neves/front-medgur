import './noticias.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Faixa from '../img/Faixa_slogan.png'
import Carrosel from '../components/Carrosel'
import Slider from '../components/Slider'

export default function Noticias() {
  return (
    <>
        <Header />
      <main className="main">
        {/* Notícias com o Carrosel do Codepen */}
        <h1 className="titulo">Notícias</h1>
        <Slider />

        {/* Notícias da Última hora */}
        <h1 className="titulo">Última Hora</h1>
        <section className='section-ultimas-horas'>
          {/* Notícia Grande */}
          <div className='div-noticia-grande'>
            <div className='imgs-grande'>{/* Imagem da Notícia Grande */}</div>
            <div className='text-grande'>
              <strong>Novo Nordisk fecha acordo de US$ 2,2 bi para pílulas contra obesidade</strong>
              <p>Fechamento do pacto está sujeito a condições regulatórias e deve ocorrer no segundo trimestre de 2025</p>
              <p>Atualizado 14/05/2025 às 17:23</p>
            </div>
          </div>
          {/* Notícia Pequenas */}
          <div className='div-noticias-pequenas'>
            <div className='noticia-pequena'>
              <div className='imgs'><img src="https://blog.lifecentershop.com.br/wp-content/uploads/2023/07/Dores-no-peito-.png" alt="imagem senhor com dor" /></div>
              <div className='text'>
                Dois remédios baratos para o colesterol podem evitar 2º ataque cardíaco
              </div>
            </div>
            <div className='noticia-pequena'>
              <div className='imgs'><img src="https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/04/anitta_8c9ed9.png?w=894" alt="Imagem Annita" /></div>
              <div className='text'>
                Anitta aciona órgão federal para impedir uso de seu nome em cosméticos
              </div>
            </div>
            <div className='noticia-pequena'>
              <div className='imgs'><img src="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2014/05/09/cogumelos1.jpg" alt=" Imagem Cogumelos" /></div>
              <div className='text'>
                Uso de cogumelos mágicos cresce nos EUA, aponta novo estudo
              </div>
            </div>
            <div className='noticia-pequena'>
              <div className='imgs'><img src="https://images.pexels.com/photos/7230187/pexels-photo-7230187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagem Remedio" /></div>
              <div className='text'>
                Esclerose múltipla: novo remédio no SUS oferece maior qualidade de vida
              </div>
            </div>
          </div>
        </section>

        {/* Noticias artigos */}
        <h1 className="titulo">Artigos</h1>
        <section className='section-artigos'>
          <div className='noticia-artigo'>
            <div className='img-relacionada'>
              <img src="https://revistadafarmacia.com.br/wp-content/uploads/2022/06/ecommerce_medicamentos.jpg" alt="remediio no Carrinho" />
            </div>
            <div className='text-artigos'>
              <strong>E-commerce: quando a farmácia vai além do balcão</strong>
              <p>Digitalização amplia o alcance, melhora a experiência e fortalece o relacionamento entre farmácias e consumidores.</p>
              <p>Gestão 29/05/2025 06:36</p>
            </div>
          </div>
          <div className='noticia-artigo'>
            <div className='img-relacionada'>
              <img src="https://revistadafarmacia.com.br/wp-content/uploads/2025/05/ESSITY_Eduardo-Monge_002-1.webp" alt="Eduardo Monge é o novo Marketing Grouper da Essity para Brasil, Argentina, Uruguai e Paraguai." />
            </div>
            <div className='text-artigos'>
              <strong>Essity fortalece sua presença regional com novo executivo</strong>
              <p>Eduardo Monge tem o objetivo de consolidar a atuação regional da companhia com marcas como TENA, Libresse e Pequeñín.</p>
              <p>Indústria 29/05/2025 06:15</p>
            </div>
          </div>
          <div className='noticia-artigo'>
            <div className='img-relacionada'>
              <img src="https://revistadafarmacia.com.br/wp-content/uploads/2025/05/handler-7.webp" alt="Home Climatempo" />
            </div>
            <div className='text-artigos'>
              <strong>DPSP e Climatempo combinam dados para incentivar vacinação contra a gripe</strong>
              <p>Campanha identifica áreas de risco elevado de incidência da doença respiratória e alerta a população sobre a importância de se vacinar.</p>
              <p>Farmácia 28/05/2025 17:50</p>
            </div>
          </div>
        </section>

        {/* Essa div Abaixo é a Faixa azul  */}
        <div className='faixa'>
          <img src={Faixa} alt=" Faixa" />
        </div>

        {/* Section que tem um Carrosel vertical e um textão do Lado */}
        <Carrosel />

        {/* Notícias em quadrados,última parte do site tirando o Footer */}
        <h1 className="titulo">Relacionados</h1>
        <section className='section-relacionada'>
          <div className='noticia-relacionada'>
            <div className='img-relacionada'>
              <img src="https://viagemeturismo.abril.com.br/wp-content/uploads/2024/06/congresso-nacional-brasilia-df.jpg?crop=1&resize=1212,909" alt="Imagem Congresso" />
            </div>
            <div className='text-relacionada'>
              Congresso começará a debater venda de medicamento em supermercados
            </div>
          </div>
          <div className='noticia-relacionada'>
            <div className='img-relacionada'>
              <img src="https://bioemfoco.com.br/wp-content/uploads/leucemia-3.jpg" alt="Pessoa com leucemia" />
            </div>
            <div className='text-relacionada'>
              Anvisa é primeira agência a aprovar novo tratamento para leucemia e linfoma
            </div>
          </div>
          <div className='noticia-relacionada'>
            <div className='img-relacionada'>
              <img src="https://www.clickguarulhos.com.br/wp-content/uploads/2023/11/moedas-de-1-real-valiosas.jpg" alt="Moedas de 1 real" />
            </div>
            <div className='text-relacionada'>
              Governo prevê pagar R$ 70 bi em precatórios em julho
            </div>
          </div>
          <div className='noticia-relacionada'>
            <div className='img-relacionada'>
              <img src="https://www.infomoney.com.br/wp-content/uploads/2022/12/Captura-de-Tela-2022-12-06-as-18.12.18.png?fit=959%2C638&quality=50&strip=all" alt="Ministro da Agricultura" />
            </div>
            <div className='text-relacionada'>
              Sem espaço no orçamento, R$ 4 bi de Seguro Rural será desafio, diz Fávaro
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

