/// external modules ///
import React from 'react';

/***************************************
  COMPONENT
***************************************/
const Card = ({ children , ...rest }) => {
  return (
    <div className='card'>
      {children}
    </div>
  );
};

/**************************************/
export default Card;
