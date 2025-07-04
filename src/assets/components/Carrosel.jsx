import React, { useEffect, useRef, useState } from 'react';
import './Carrosel.css';

const Carrosel = () => {
    const slidesRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        "https://images.pexels.com/photos/5722883/pexels-photo-5722883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/9629685/pexels-photo-9629685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3683070/pexels-photo-3683070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
        }, 3000); // troca a cada 3 segundos

        return () => clearInterval(interval); // limpa o intervalo ao desmontar
    }, [slides.length]);

    useEffect(() => {
        if (slidesRef.current) {
            const slideWidth = slidesRef.current.offsetWidth;
            slidesRef.current.scrollTo({
                left: slideWidth * currentIndex,
                behavior: 'smooth'
            });
        }
    }, [currentIndex]);

    return (
        <section id='sectionmain'>
            <section id="section_sliders">
                <div className="slider">
                    <div className="slides" ref={slidesRef}>
                        {slides.map((img, index) => (
                            <div
                                key={index}
                                className="slide"
                                style={{
                                    backgroundImage: `url(${img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            />
                        ))}
                    </div>

                    <div className="dots">
                        {slides.map((_, index) => (
                            <span
                                key={index}
                                className="botões"
                                onClick={() => setCurrentIndex(index)}
                                style={{ opacity: currentIndex === index ? 1 : 0.5 }}
                            />
                        ))}
                    </div>
                </div>
            </section>


                        {/* Essa section, contem somente o texto do lado do carrosel */}

            <section id="section_text"> 
                <h1>Medicamentos podem perder eficácia com onda de calor veja cuidados</h1>
                <p>Alguns fármacos podem perder a eficácia e se deteriorar diante do calor; farmacêutica explica como armazená-los corretamente</p>
                <p>A partir desta sexta-feira (23), o Brasil vai enfrentar uma nova onda de calor que deve se prolongar pelo Carnaval. Entre as regiões metropolitanas mais afetadas estão as de Porto Alegre, Curitiba e São Paulo.</p>
                <p>Além dos cuidados necessários com a saúde e hidratação, é preciso estar atento a forma como os medicamentos são armazenados durante o período de altas temperaturas. Isso porque alguns fármacos podem perder a eficácia e se deteriorar diante do calor.</p>
                <p>Também é preciso ficar atento ao tempo de exposição do medicamento ao calor. “Em um ambiente externo, em que a temperatura pode estar acima dos 35 ºC, o remédio tem, em média, de uma a duas horas para suportar o calor dentro da cartela, que o protege. Mas se você tirar o comprimido da cartela, o processo degenerativo será bem mais acelerado. Ele pode apresentar pontos escuros, amarelos ou brancos em pouco tempo”, exemplifica.</p>
                <p>18/05/2025 às 15:54</p>
            </section>
        </section>
    );
};

export default Carrosel;
