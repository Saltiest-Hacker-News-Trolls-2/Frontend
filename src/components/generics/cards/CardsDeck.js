/// external modules ///
import React from 'react';

/***************************************
  COMPONENT
***************************************/
const CardsDeck = ({ children , ...props }) => {
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
