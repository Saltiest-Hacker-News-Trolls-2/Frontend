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
  /* items :: Array
  -- array of props for feed items */
  items = [],
  /* rest of props */
  ...rest
}) => {
  return (
    <CardDeck
    className={`feed ${rest.className || ''}`.trim ()}
    >
      {items.map ((props) => (
        <component key={props.id} {...props}/>
      ))}
    </CardDeck>
  );
};

/**************************************/
export default Feed;
