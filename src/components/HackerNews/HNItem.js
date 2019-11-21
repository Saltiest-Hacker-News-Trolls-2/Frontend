/// external modules ///
import React from 'react';

/// internal modules ///
import Card from '../generics/cards/Card';
import CardHead from '../generics/cards/CardHead';
import CardBody from '../generics/cards/CardBody';
import CardFoot from '../generics/cards/CardFoot'
// import CardFoot from '../generics/cards/CardFoot';
import HNItemLink from './HNItemLink';
import HNUserLink from './HNUserLink';

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
  console.log(itemData)
  return (
    <Card
    className='HN-item t-to-b'
    col
    onClick={view}
    >
      <CardHead>
        {/* <span className='item-salty-score'>{score}</span> */}
        <span className='item-type'>({itemData.type})</span>
        <h3><span className='item-title'>{itemData.title}</span></h3>
        <span className='item-karma-score'>({itemData.score})</span>
        <button className='item-fav' onClick={toggleFav}>Fav? {isFav}</button>
        <span className='item-by-user'>by <HNUserLink userID={itemData.by}/></span>
        <span className='item-at-time'>at {itemData.time}</span>
      </CardHead>
      <CardBody>
        <div className='item-text'>{itemData.text}</div>
      </CardBody>
      <CardFoot>
        <HNItemLink itemID={itemData.id}>View at HackerNews</HNItemLink>
        {itemData.url && (
          <a className='item-origin-url' href={itemData.url}>View Original</a>
        )}
      </CardFoot>
    </Card>
  );
};

/**************************************/
export default HNItem;
