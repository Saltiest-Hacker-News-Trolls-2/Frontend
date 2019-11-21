/// external modules ///
import React from 'react';

/// internal modules ///
import Card from '../generics/cards/Card';
import CardHead from '../generics/cards/CardHead';
import CardBody from '../generics/cards/CardBody';
// import CardFoot from '../generics/cards/CardFoot';

/// styles ///
import './styles.css';

/***************************************
  COMPONENT
***************************************/
const HNUser = ({
  /* userData :: object
  -- userData as-is (from HackerNews API) */
  userData,
  /* [optional] isFav :: boolean
  -- current fav status (from Web/backend API) */
  isFav = null,
  /* [optional] toggleFav :: function
  -- callback to add/remove fav status (in Web/frontend + Web/backend API) */
  toggleFav = null,
  /* view :: function
  -- callback to view item (in Web/frontend) */
  view,
  /* score :: number
  -- saltiness score of item (from DS API) */
  score,
  /* [optional] tags :: array
  -- list of tags classifying item (from DS API) */
  tags = null,
  /* rest of props */
  ...rest
}) => {
  return (
    <div></div>
  );
};

/**************************************/
export default HNUser;
