/// external modules ///
import React from 'react';

/***************************************
  COMPONENT
***************************************/
const CardBody = ({ children , ...rest }) => {
  return (
    <main className='card-body'>
      {children}
    </main>
  );
};

/**************************************/
export default CardBody;
