/// external modules ///
import React from 'react';

/***************************************
  COMPONENT
***************************************/
const CardHead = ({ children , ...rest }) => {
  return (
    <header className="card-head">
      {children}
    </header>
  );
};

/**************************************/
export default CardHead;
