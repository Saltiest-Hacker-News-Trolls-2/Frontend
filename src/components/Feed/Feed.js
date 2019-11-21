/// external modules ///
import React from 'react';

/// internal modules ///
import Card from '../generics/cards/Card';
import CardDeck from '../generics/cards/CardDeck';

/// styles ///
import './styles.css';

/***************************************
  COMPONENT
***************************************/
const Feed = ({
  /* component :: React.Component
  -- the component to use for feed items */
  component = Card,
  /* rest of props */
  ...rest
}) => {
  return (
    <CardDeck
      className={`feed ${rest.className}`}
    >
      {children}
    </CardDeck>
  );
};

/**************************************/
export default Feed;
