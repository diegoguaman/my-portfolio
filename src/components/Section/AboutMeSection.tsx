import React from 'react';
import SectionTitle from './SectionTitle';
import SectionText from './SectionText';
import SectionSubTitle from './SectionSubTitle';
import ButtonLink from '../ButtonLink';
import image from './../../assets/images/aboutMe.png';

const AboutMeSection:React.FC = () => {
  return (
    <div className='relative flex min-h-96'>
      <div className="flex-1 bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${image})`,
        }}>
      </div>
      <div className='flex-1 flex flex-col justify-between max-w-lg ms-8 text-justify shadow-x1'>
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
        <ButtonLink buttonText='Descargar CV' bgColor='' href='https://res.cloudinary.com/dgtbm9skf/image/upload/v1748843515/Diego%20Guaman%20Medina%20CV.pdf' />
        </div>
      </div> 
    </div>
  );
};

export default AboutMeSection;