/// external modules ///
import React from 'react';

/// styles ///
import './styles.css';

/***************************************
  COMPONENT
***************************************/
const HNItem = ({
  /* itemData :: object
  -- itemData as-is (from HackerNews API) */
  itemData,
  /* isFav :: boolean
  -- current fav status (from Web/backend API) */
  isFav,
  /* toggleFav :: function
  -- callback to add/remove fav status (in Web/frontend + Web/backend API) */
  toggleFav,
  /* [optional] view :: function
  -- callback to view item (in Web/frontend) */
  view = null,
  /* [optional] score :: number
  -- saltiness score of item (from DS API) */
  score = null,
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
export default HNItem;
