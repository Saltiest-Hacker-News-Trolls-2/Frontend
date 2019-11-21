/// external modules ///
import React from 'react';

/***************************************
  COMPONENT
***************************************/
const HNItemLink = ({ itemID , children , ...rest }) => {
  return (
    <a
    className={`item-HN-url ${rest.className || ''}`.trim ()}
    href={`https://news.ycombinator.com/item?id=${itemID}`}
    >
      {children || itemID}
    </a>
  );
};

/**************************************/
export default HNItemLink;
