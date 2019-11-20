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
const ifFunction = (message , fun , args) => {
  if (check.isFunction (fun)) {
    console.log (message);
    console.log (...args);
    fun (...args);
  }
}

const handleGoodResponse = (handleResponse , handleData , initData) => (reponse) => {
  console.log ("--- success? ---");
  /// handle response ///
  ifFunction (
    '...handling response...' ,
    handleResponse , [response]
  );
  /// handle data ///
  ifFunction (
    '...handling data...' ,
    handleData , [{ ...initData , ...(response.data) }]
  );
}

const handleErrorResponse = (handleError , handleData , initData) => (error) => {
  console.log ("--- failure? ---");
  /// handle error ///
  ifFunction (
    '...handling error...' ,
    handleError , [error]
  );
  /// handle data ///
  ifFunction (
    '...handling data...' ,
    handleData , [{ ...initData , 'error' : error }]
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
