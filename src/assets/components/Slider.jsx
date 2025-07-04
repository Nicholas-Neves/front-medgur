
import React, { useRef, useState } from 'react';
import './Slider.css';

const slides = [

    /* essa parte contem os slides e suas respectivas imagens e descricoes    */

    {
        image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'DPSP anuncia parceria para incentivar vacinação contra a gripe',
        description:
            'Para incentivar a vacinação contra a gripe, o Grupo DPSP buscou o apoio da Climatempo. Por meio da parceria, a consultoria meteorológica cruzará dados para alertar a população sobre a necessidade da imunização.',
    },
    {
        image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Com custos crescentes, medicamentos hospitalares podem faltar',
        description:
            'As distribuidoras especializadas em medicamentos hospitalares vêm sofrendo com a pressão gerada pela alta no custo desses produtos. Quem afirma é a Abradimex, que encomendou à Deloitte um estudo sobre o tema.',
    },
    
    {
        image: 'https://admin.cff.org.br/src/uploads/noticia/3bf4ff902282d4bafb3f66652eada6f0c10d122b.jpeg',
        title: 'Entidades se unem em campanha contra a falsificação de medicamentos',
        description:
            'Uma iniciativa criada por meio da parceria entre o Conselho Nacional de Combate à Pirataria (CNCP), a Interfarma e o Ministério da Justiça e Segurança Pública (MJSP) visa combater e alertar sobre os riscos da falsificação de medicamentos no país.',
    },
    {
        image: 'https://images.pexels.com/photos/5726834/pexels-photo-5726834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: '94% dos medicamentos genéricos vendidos no Brasil são produzidos por farmacêuticas nacionais',
        description:
            'A Associação dos Laboratórios Farmacêuticos Nacionais (Alanac) divulgou hoje dados inéditos que comprovam a força das empresas locais: 94% dos genéricos vendidos no país são produzidos por laboratórios brasileiros. Entre os dez medicamentos genéricos mais comercializados.',
    },
    {
        image: 'https://images.pexels.com/photos/5827287/pexels-photo-5827287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Últimos dias para inscrições no III Prêmio Pio Corrêa de Inovação em Ciências Farmacêuticas',
        description:
            'Pesquisadores, profissionais e instituições têm até o dia 31 de maio de 2025, às 23h59 (horário de Brasília) para inscrever seus projetos no III Prêmio Pio Corrêa de Inovação em Ciências Farmacêuticas da Biodiversidade Brasileira.',
    },
     {
        image: 'https://images.pexels.com/photos/3602778/pexels-photo-3602778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Com reajuste de até 5,06%, medicamentos ficarão mais caros em abril',
        description:
            'A partir da próxima terça-feira (1º), os preços dos medicamentos no Brasil poderão sofrer reajustes, conforme determinação da Anvisa. As empresas farmacêuticas têm até esta segunda-feira (31) para enviar os novos valores à CMED, seguindo o procedimento anual de atualização.',
    },
    // ... outros slides
];


/* Abaixo esta o JavaScript que é usado para fazer a animação de passar os slides, com next e prev */

const Slider = () => {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlide = (direction) => {
        const slider = sliderRef.current;
        const items = slider.querySelectorAll('.item');

        if (direction === 'next') {
            slider.appendChild(items[0]);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        } else if (direction === 'prev') {
            slider.prepend(items[items.length - 1]);
            setCurrentIndex((prevIndex) =>
                (prevIndex - 1 + slides.length) % slides.length
            );
        }
    };
            /* Aqui seria mais a forma que seria montado o JS, juntamente com os slides */
    return (
        <div
            className='divmain'
            style={{
                backgroundImage: `url('${slides[currentIndex].image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 0.5s ease-in-out',
            }}
        >
            <ul className="slider" ref={sliderRef}>
                {slides.map((slide, index) => (
                    <li
                        key={index}
                        className="item"
                        style={{ backgroundImage: `url('${slide.image}')` }}
                    >
                        
                        <div className="content">
                            <h1 className="title">{slide.title}</h1>
                            <p className="description">{slide.description}</p>
                        </div>
                    </li>
                    
                    
                ))}

                {/* Abaixo os botoes, para poder clicar, next e prev */}

            </ul>
            <nav className="nav">
                <ion-icon
                    class="btn prev"
                    name="arrow-back-outline"
                    onClick={() => handleSlide('prev')}
                ></ion-icon>
                <ion-icon
                    class="btn next"
                    name="arrow-forward-outline"
                    onClick={() => handleSlide('next')}
                ></ion-icon>
            </nav>
        </div>
    );
};

export default Slider;
