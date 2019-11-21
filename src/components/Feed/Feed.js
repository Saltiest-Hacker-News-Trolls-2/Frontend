/// external modules ///
import React from 'react';

/// internal modules ///
import CardDeck from './path/CardDeck';

/// styles ///
import './styles.css';

/***************************************
  COMPONENT
***************************************/
const Feed = ({ children , ...rest }) => {
  return (
    <CardDeck
      className={`feed ${rest.className}`}
    >
      {}
    </CardDeck>
  );
};

/**************************************/
export default Feed;
