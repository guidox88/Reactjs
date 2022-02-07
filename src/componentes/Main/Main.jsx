import React from 'react';
import Accordion from '../Accordion/Accordion';

const Main = ({ children, className }) => {
  return(
    <div className={className}> 
     {children}
    </div>
    )
};

export default Main;
