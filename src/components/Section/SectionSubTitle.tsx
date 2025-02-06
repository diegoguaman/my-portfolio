import React from 'react';
interface SectionSubTitleProps{
  subTitle:string;
}

const SectionSubTitle:React.FC<SectionSubTitleProps> = ({subTitle}) => {
  return <h3 className='text-lg mt-2 mb-2'>{subTitle}</h3>
};

export default SectionSubTitle;