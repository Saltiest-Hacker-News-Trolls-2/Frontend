/// external modules ///
import React from 'react';

/// styles ///
import './styles.css';

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
