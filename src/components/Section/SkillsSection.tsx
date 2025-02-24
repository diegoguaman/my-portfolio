import React from 'react';
import SectionTitle from './SectionTitle';
import SectionSubTitle from './SectionSubTitle';
import gitIcon from '../../assets/icons/git.svg';
import reactIcon from '../../assets/icons/react.svg';
import nodeIcon from '../../assets/icons/node.svg';
import mongoIcon from '../../assets/icons/mongo.svg';
import typeIcon from '../../assets/icons/typescript.svg';
import jsIcon from '../../assets/icons/js.svg';
import tailIcon from '../../assets/icons/tailwind.svg';
import expressIcon from '../../assets/icons/express.svg';
import fastIcon from '../../assets/icons/FastAPI.svg';
import dockerIcon from '../../assets/icons/Docker.svg';
import GitHubIcon from '../../assets/icons/GitHub.svg';
import jestIcon from '../../assets/icons/Jest.svg';
import swagger from '../../assets/icons/Swagger.svg';
import nextIcon from '../../assets/icons/Next.js.svg';
import figmaIcon from '../../assets/icons/Figma.svg';
const SkillsSection: React.FC = () => {
  const iconSkills = "w-16 md:w-20";
  return (
    <div className='flex flex-col min-h-[24rem] py-8 px-4 bg-gray-50 text-center'>
      <SectionTitle title='Skills' />
      <SectionSubTitle subTitle='Tools and Tecnologies I use' />
      <div className='mt-8 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center'>
          <img className={iconSkills} src={reactIcon} alt="React" />
          <img className={iconSkills} src={gitIcon} alt="Git" />
          <img className={iconSkills} src={nodeIcon} alt="Node" />
          <img className={iconSkills} src={mongoIcon} alt="Mongo" />
          <img className={iconSkills} src={typeIcon} alt="TypeScript" />
          <img className={iconSkills} src={jsIcon} alt="JavaScript" />
          <img className={iconSkills} src={tailIcon} alt="Tailwind CSS" />
          <img className={iconSkills} src={expressIcon} alt="Express" />
          <img className={iconSkills} src={fastIcon} alt="FastAPI" />
          <img className={iconSkills} src={dockerIcon} alt="Docker" />
          <img className={iconSkills} src={GitHubIcon} alt="GitHub" />
          <img className={iconSkills} src={jestIcon} alt="Jest" />
          <img className={iconSkills} src={swagger} alt="Swagger" />
          <img className={iconSkills} src={nextIcon} alt="Next.js" />
          <img className={iconSkills} src={figmaIcon} alt="Figma" />
       
      </div>
    </div>
  );
};

export default SkillsSection;
