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
      <div className='flex-1 flex flex-col justify-between max-w-lg ms-8 shadow-x1 z-10'>
        <SectionTitle  title="About Me"/>
        <SectionSubTitle subTitle='Full Stack Web Developer' />
        <SectionText>
          I am a developer with experience in <strong>React, Node.js, Express, and MongoDB</strong>, passionate about building scalable and optimized applications. Currently, I am expanding my knowledge in <strong> Docker, TypeScript, React Native, and FastAPI</strong>, exploring hexagonal architecture and agile methodologies. I am motivated by solving problems, optimizing code, and constantly learning, always seeking innovative and efficient solutions. Additionally, I enjoy teamwork, participating in <strong> sprints, code reviews, and agile methodologies</strong>, where communication and shared learning are key.
        </SectionText>
        <SectionText >
          Beyond the code, I am a curious and enthusiastic person, always in search of new experiences. I am passionate about live music, cinema, and discovering special places that inspire me. I believe that creativity and technology go hand in hand, and I find in my hobbies a source of fresh ideas to apply in my work. I am always ready to take on new challenges, grow professionally, and add value to innovative projects.
        </SectionText>
        <div className='flex'>
        <ButtonLink buttonText='Download CV' bgColor='' href='https://res.cloudinary.com/dgtbm9skf/image/upload/v1748843515/Diego%20Guaman%20Medina%20CV.pdf' />
        </div>
      </div> 
    </div>
  );
};

export default AboutMeSection;