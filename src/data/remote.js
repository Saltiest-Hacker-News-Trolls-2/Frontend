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

export const remote = {
  /*******************
    GET
  *******************/
  get : ({
    handleResponse , handleError , handleData , initData
  }) => (query , config) => {
    console.log ("--- getting remote data... ---");
    axios
      .get (
        query , config
      )
      .then (
        handleGoodResponse (handleResponse , handleData , initData)
      )
      .catch (
        handleErrorResponse (handleError , handleData , initData)
      )
      .finally (() => {
        console.log ("--- done. ---");
      })
  },

  /*******************
    POST
  *******************/
  post : ({
    handleResponse , handleError , handleData , initData
  }) => (query , data , config) => {
    console.log ("--- posting remote data... ---");
    axios
      .post (
        query , data , config
      )
      .then (
        handleGoodResponse (handleResponse , handleData , initData)
      )
      .catch (
        handleErrorResponse (handleError , handleData , initData)
      )
      .finally (() => {
        console.log ("--- done. ---");
      })
  },

  /*******************
    PUT
  *******************/
  put : ({
    handleResponse , handleError , handleData , initData
  }) => (query , data , config) => {
    console.log ("--- putting remote data... ---");
    axios
      .put (
        query , data , config
      )
      .then (
        handleGoodResponse (handleResponse , handleData , initData)
      )
      .catch (
        handleErrorResponse (handleError , handleData , initData)
      )
      .finally (() => {
        console.log ("--- done. ---");
      })
  },

  /*******************
    DELETE
  *******************/
  delete : ({
    handleResponse , handleError , handleData , initData
  }) => (query , config) => {
    console.log ("--- deleting remote data... ---");
    axios
      .delete (
        query , config
      )
      .then (
        handleGoodResponse (handleResponse , handleData , initData)
      )
      .catch (
        handleErrorResponse (handleError , handleData , initData)
      )
      .finally (() => {
        console.log ("--- done. ---");
      })
  },
};
