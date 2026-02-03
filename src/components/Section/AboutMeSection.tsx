import React from 'react';
import SectionTitle from './SectionTitle';
import SectionText from './SectionText';
import SectionSubTitle from './SectionSubTitle';
import ButtonLink from '../ButtonLink';
import image from './../../assets/images/aboutMe.png';

const AboutMeSection:React.FC = () => {
  return (
    <div className='
      flex flex-col mt-6 md:flex-row
      min-h-[24rem]
      md:min-h-96 '>
      {/* Imagen de fonde */}
      <div className="
        w-full md:w-1/2                    // ¡Cambio! full width en móvil, mitad en md+
        h-64 md:h-auto                    // ¡Cambio! altura fija en móvil, auto en md+
        bg-cover md:bg-center"
        style={{
          backgroundImage:
            `url(${image})`,
        }}>
      </div>

      {/* Contenedor de texto */}
      <div className='
        w-full md:w-1/2
        flex flex-col justify-between
        items-center
        p-6 md:p-8
        space-y-4
        text-justify
        shadow-xl
        bg-white
        md:items-start'>
        <SectionTitle  title="Acerca De" uppercase='uppercase'/>
        <SectionSubTitle subTitle='Desarrollador web Full Stack ' />
        <SectionText>
          Soy un desarrollador con experiencia en <strong>React, Node.js, Express, and MongoDB</strong>, y me apasiona crear aplicaciones escalables y optimizadas. Actualmente, estoy ampliando mis conocimientos en <strong> Docker, TypeScript, React Native, and FastAPI</strong>, explorando la arquitectura hexagonal y las metodologías ágiles. 
          Me motiva resolver problemas, optimizar código y aprender constantemente, buscando siempre soluciones innovadoras y eficientes. 
          Además, disfruto del trabajo en equipo, participando en <strong> sprints, code reviews, and agile methodologies</strong>, donde la comunicación y el aprendizaje compartido son clave.
        </SectionText>
        <SectionText >
          Más allá del código, soy una persona curiosa y entusiasta, siempre en busca de nuevas experiencias. Me apasiona la música en directo, el cine y descubrir lugares especiales que me inspiran. Creo que la creatividad y la tecnología van de la mano, y encuentro en mis aficiones una fuente de nuevas ideas para aplicar en mi trabajo. Siempre estoy dispuesto a asumir nuevos retos, crecer profesionalmente y aportar valor a proyectos innovadores.        </SectionText>
        <div className='flex'>
        <ButtonLink buttonText='Descargar CV' bgColor='back' href='https://drive.google.com/file/d/1xt6WQfmD20wKKc2sia7Sqew1f7uHHoyz/view?usp=drive_link' />
        </div>
      </div> 
    </div>
  );
};

export default AboutMeSection;