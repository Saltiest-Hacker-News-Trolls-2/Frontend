/// external modules ///
import React from 'react';

/***************************************
  COMPONENT
***************************************/
const CardFoot = ({ children , ...rest }) => {
  return (
    <footer className="card-foot">
      {children}
    </footer>
  );
};

/**************************************/
export default CardFoot;
