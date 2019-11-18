/// external modules ///
import React from 'react';

/***************************************
  COMPONENT
***************************************/
const CardHead = ({ children , ...props }) => {
  return (
    <header className="card-head">
      {children}
    </header>
  );
};

/**************************************/
export default CardHead;
