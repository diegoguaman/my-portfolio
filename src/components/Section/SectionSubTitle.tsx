import React from 'react';
interface SectionSubTitleProps{
  subTitle:string;
}

const SectionSubTitle:React.FC<SectionSubTitleProps> = ({subTitle}) => {
  return <h3 className='text-lg'>{subTitle}</h3>
};

export default SectionSubTitle;