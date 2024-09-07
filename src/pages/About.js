import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
        <div className="about-background"></div> 
      
      <h1 className="about-title">Sobre Nosotros</h1>
      
      <section className="about-section">
        <h2 className="about-subtitle">Visión</h2>
        <p>
          Mejorar y ampliar los usos, conocimientos y tecnologías que utilicen la piedra, con consciencia social y global pero con trabajo y materia prima costarricenses en pro de una óptima calidad de vida y desarrollo sostenible del país.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">Misión</h2>
        <p>
          Resaltar el valor y creatividad humanas a través del trabajo con la piedra, en la construcción, decoración y afines en Costa Rica, contribuyendo con los avances y mejoras de este ancestral arte.
        </p>
        <p>
          Ser el enlace profesional y ético entre los usuarios finales, productos e intermediarios de la industria de la construcción y afines, garantizando el uso inteligente y efectivo de los recursos de todas las partes.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">Historia</h2>
        <p>
          De las cavernas hasta el corazón a través del arte humano de las rocas...
        </p>
        <p>
         Un curioso niño, asombrado de las esculturas en su escuela, los adornos y trabajos en su localidad de Patarrá de Desamparados en San José, y las montañas hechas de piedra, crece con la visión de llegar más allá de muros y materiales de construcción pues quiere transmitir el sentimiento del Arte de la Roca hacia todos los niveles de la sociedad costarricense. La sensibilidad con la piedra y la creatividad, como la cercanía con el planeta a través de las rocas, que muestran potencia y pureza, nació desde su centro educativo y su padre hasta el trabajo directo. Hijo de un escultor rural, apasionado del silencioso y puro lenguaje de este material natural costarricense, hace nacer este emprendimiento juvenil. El niño se hizo joven e inicia -antes de su adultez- un proyecto productivo modelo, no solo con una tienda online para mayoristas y clientes finales del producto, sino también con la asesoría sobre diseños y usos más allá de lo que está en el mercado común. David Bogantes, se rodea de otros jóvenes, incluyendo un estudiante de Arquitectura que busca refugio en Costa Rica, pues en su natal tierra, la guerra y agresión lo ha despojado de toda esperanza. Así, las piedras no son solo las bases de una casa, sino las bases de una solidaridad universal que habla un único lenguaje: EL ÉXITO

        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">Noticias</h2>
        <p>
          Primer venta antes de hacer el Opening y Lanzamiento de nuestro miniPymes. Celebramos el honor de contar con el primer cliente corporativo: Hábitat Studio.
        </p>
      </section>
    </div>
  );
}

export default About;
