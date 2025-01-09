import React from 'react';
import SectionTitle from './SectionTitle';
import SectionText from './SectionText';
import SectionSubTitle from './SectionSubTitle';
import ButtonLink from '../ButtonLink';


const AboutMeSection:React.FC = () => {
  return (
    <div className='relative flex min-h-96'>
      <div className="flex-1 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dgtbm9skf/image/upload/v1735128334/fondo_tffm9a.jpg')",
        }}>
      </div>
      <div className='flex-1 flex flex-col justify-between max-w-lg ms-8 shadow-x1 z-10'>
        <SectionTitle  title="About Me"/>
        <SectionSubTitle subTitle='UI/UX Designer & Web Developer' />
        <SectionText text="I'm Kalvin Doe Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."/>
        <SectionText text='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'/>
        <div className='flex'>
        <ButtonLink buttonText='Download CV' bgColor='' />
        </div>
      </div> 
    </div>
  );
};

export default AboutMeSection;