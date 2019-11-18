/// external modules ///
import React from 'react';

/***************************************
  COMPONENT
***************************************/
const Card = ({ children , ...props }) => {
  return (
    <div className='card'>
      {children}
    </div>
  );
};

/**************************************/
export default Card;
