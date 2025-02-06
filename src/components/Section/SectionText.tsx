import React from 'react';

interface SectionTextProps {
  children: React.ReactNode;
}
const SectionText:React.FC<SectionTextProps> = ({children}) => {
  return <p className='mb-3 text-sm'>{children}</p>
};

export default SectionText;