/*******************************************************************************
  PARAMS
*******************************************************************************/

/*//////////////////////////////////////
  utils
//////////////////////////////////////*/

Array.prototype.first = function () {
  return (this[0]);
};

Array.prototype.last = function () {
  return (this[this.length - 1]);
};

Array.prototype.rest = function () {
  return (this.slice (1 , this.length));
};

/***************************************
  PATTERN
***************************************/
export const paramTypes = [ '/' , '?' ];

export const pattern = (type , name) => {
  const make = (s) => (new RegExp (s));
  switch (type) {
    case '/' :
      return (make (`.*[/]${name}/([^/]+).*`));
    case '?' :
      return (make (`.*[?&]${name}=([^&]+).*`));
    default :
      return (null);
  }
}

/***************************************
  PARAMS
***************************************/
export const params = (type) => ({
  match : function (name , url) {
    /// get pattern ///
    const pat = pattern (type , name);
    
    /// get matches ///
    if (pat) { return (pat.exec (url).rest ()); }
    
    /// default ///
    return (null);
  },
  matchFirst : function (name , url) {
    return (this.match (name , url).first ())
  },
  matchLast : function (name , url) {
    return (this.match (name , url).last ())
  },
});

/*******************
  URL PARAMS
*******************/
export const urlParams = {
  match      : (name , url) => (params.match ('/' , name , url)),
  matchFirst : (name , url) => (params.matchFirst ('/' , name , url)),
  matchLast  : (name , url) => (params.matchLast ('/' , name , url)),
};

/*******************
  QUERY PARAMS
*******************/
export const queryParams = {
  match      : (name , url) => (params.match ('?' , name , url)),
  matchFirst : (name , url) => (params.matchFirst ('?' , name , url)),
  matchLast  : (name , url) => (params.matchLast ('?' , name , url)),
};

/***************************************
  GET VALUES FROM STANDARD INFO
***************************************/
export const getQueryPage = (info) => {
  let page = null;
  if (page === null && info.prev !== '') {
    page = queryParams.matchLast ('page' , info.prev);
  }
  if (page === null && info.next !== '') {
    page = queryParams.matchLast ('page' , info.next);
  }
};
