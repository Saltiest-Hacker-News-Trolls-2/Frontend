/// external modules ///
import React from 'react';

/***************************************
  COMPONENT
***************************************/
const HNUserLink = ({ userID , children , ...rest }) => {
  return (
    <a
    className={`user-HN-url ${rest.className || ''}`.trim ()}
    href={`https://news.ycombinator.com/user?id=${userID}`}
    >
      {children || userID}
    </a>
  );
};

/**************************************/
export default HNUserLink;
