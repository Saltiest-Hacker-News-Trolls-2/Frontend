/// external modules ///
import React from 'react';

/// styles ///
import './styles.css';

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
