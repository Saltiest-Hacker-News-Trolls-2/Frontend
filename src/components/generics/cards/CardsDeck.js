/// external modules ///
import React from 'react';

/// styles ///
import './styles.css';

/***************************************
  COMPONENT
***************************************/
const CardsDeck = ({ children , ...rest }) => {
  return (
    <ul className="cards-deck">
      {children.map ((card) => (
        <li>{card}</li>
      ))}
    </ul>
  );
};

/**************************************/
export default CardsDeck;
