/*******************************************************************************
  REMOTE
*******************************************************************************/

///external modules ///
import axios from "axios";

/// internal modules ///
import check from '../utils/is-type';

/*//////////////////////////////////////
  utils
//////////////////////////////////////*/
const ifFunction = (fun , args , message) => {
  if (check.isFunction (fun)) {
    console.log (message);
    console.log (...args);
    fun (...args);
  }
}

/*--------------------------------------
  handleAxiosError
----------------------------------------
  based on: <https://github.com/axios/axios#handling-errors>
--------------------------------------*/
export const handleAxiosError = (error) => {
  let message = {};

  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log ('The server did respond, but with an error:');
    console.log ('- data:' , error.response.data);
    console.log ('- status:' , error.response.status);
    console.log ('- headers:' , error.response.headers);

    message = error.response.data;
  }
  else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log ('The server did not respond:');
    console.log ('- request:' , error.request);

    message.error = [
      'The server did not respond.',
    ];
  }
  else {
    // Something happened in setting up the request that triggered an Error
    console.log ('An runtime error occured:');
    console.log ('- Error:', error.message);

    message.error = {
      'oops' : error.message,
    };
  }
  console.log ('- config:' , error.config);

  return (message);
}

export const handleGoodResponse = (handleResponse , handleData , initData) => (response) => {
  console.log ("--- success? ---");
  /// parse data ///
  const re = response.data;
  /// handle response ///
  ifFunction (
    handleResponse ,
    [{ 'data' : re , 'from' : response }] ,
    '...handling response...' ,
  );
  /// handle data ///
  ifFunction (
    handleData ,
    [{ ...initData , ...re }] ,
    '...handling data...' ,
  );
}

export const handleErrorResponse = (handleError , handleData , initData) => (error) => {
  console.log ("--- failure? ---");
  /// parse out error ///
  const re = handleAxiosError (error);
  /// handle error ///
  ifFunction (
    handleError ,
    [{ 'error' : re , 'from' : error }] ,
    '...handling error...' ,
  );
  /// handle data ///
  ifFunction (
    handleData ,
    [{ ...initData , ...re }] ,
    '...handling data...' ,
  );
}

/***************************************
  REMOTE
***************************************/

export class Remote {
  /*******************
    GENERIC REQUEST
  *******************/
  request = (
    {
      method ,
      doBefore = () => { console.log ("--- making remote request... ---"); } ,
      doAfter = () => { console.log ("--- done. ---"); } ,
    }
  ) => (
    { handleResponse , handleError , handleData , initData }
  ) => (
    ...args
  ) => {
    doBefore ();
    axios
      [method] (...args)
      .then (handleGoodResponse (handleResponse , handleData , initData))
      .catch (handleErrorResponse (handleError , handleData , initData))
      .finally (doAfter);
  };

  /*******************
    GET
  *******************/
  get = Remote.request ({
    method : 'get' ,
    doBefore : () => { console.log ("--- getting remote data... ---"); }
  });

  /*******************
    POST
  *******************/
  post = Remote.request ({
    method : 'post' ,
    doBefore : () => { console.log ("--- posting remote data... ---"); }
  });

  /*******************
    PUT
  *******************/
  put = Remote.request ({
    method : 'put' ,
    doBefore : () => { console.log ("--- putting remote data... ---"); }
  });

  /*******************
    DELETE
  *******************/
  delete = Remote.request ({
    method : 'delete' ,
    doBefore : () => { console.log ("--- deleting remote data... ---"); }
  });
};
