/// external modules ///
import React from 'react';

/***************************************
  COMPONENT
***************************************/
const CardBody = ({ children , ...props }) => {
  return (
    <main className='card-body'>
      {children}
    </main>
  );
};

/**************************************/
export default CardBody;
