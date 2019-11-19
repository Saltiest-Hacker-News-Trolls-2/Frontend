/*******************************************************************************
  IS TYPE
--------------------------------------------------------------------------------
  Functions to robustly check types.
*******************************************************************************/

/*--------------------------------------
  isFunction
  Check if input is a function.
----------------------------------------
  Based on: <https://stackoverflow.com/a/7356528>
--------------------------------------*/
export const isFunction = (maybeFunction) => (
  maybeFunction && ({}.toString.call (maybeFunction) === '[object Function]')
);
