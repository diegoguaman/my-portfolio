import React from 'react';

interface SectionTextProps {
  text: string;
}
const SectionText:React.FC<SectionTextProps> = ({text}) => {
  return <p className='mt-3 text-sm'>{text}</p>
};

export default SectionText;