/// external modules ///
import React from 'react';

/***************************************
  COMPONENT
***************************************/
const HNUser = ({
  /* data :: object
  -- data as-is (from HackerNews API) */
  data,
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
  ...props
}) => {
  return (
    <div></div>
  );
};

/**************************************/
export default HNUser;
