import React from 'react';
import SectionTitle from './SectionTitle';
import SectionText from './SectionText';

const AboutMeSection:React.FC = () => {
  return (
    <div className='bg-back flex items-center justify-center'>
      <div className="container w-full h-screen inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dgtbm9skf/image/upload/v1735128334/fondo_tffm9a.jpg')",
        }}>
      </div>
      <div className='container py-8 mx-3 bg-black'>
        <SectionTitle  title="About Me"/>
        <SectionText text="Lorem"/>
      </div> 
    </div>
  );
};

export default AboutMeSection;