/*******************************************************************************
  OBJECT HELPERS
--------------------------------------------------------------------------------
  Functions to work with Objects.
*******************************************************************************/

import check from './is-type';

/***************************************
  FILTERS
***************************************/
/*--------------------------------------
  filterObject
  Filter an Object's entries like an Array.
----------------------------------------
  Based on: <https://stackoverflow.com/a/37616104>
--------------------------------------*/
export const filterObject = (obj , fun) => {
  if (check.isFunction (fun)) {
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
