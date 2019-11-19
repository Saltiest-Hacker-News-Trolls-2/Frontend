/*******************************************************************************
  OBJECT HELPERS
--------------------------------------------------------------------------------
  Functions to work with Objects.
*******************************************************************************/

import { isFunction } from './is-type';

/***************************************
  FILTERS
***************************************/
export const filterObject = (obj , fun) => {
  if (isFunction (fun)) {
    return (Object.fromEntries (Object.entries (obj).filter (fun)));
  } else {
    return (obj);
  }
};
/*******************
  ENTRIES BY KEY
*******************/
export const entriesByKey = (names) => ([ key ]) => (names.includes (key));

export const filterObjectByKey = (obj , names) => (filterObject (obj , entriesByKey (names)));
