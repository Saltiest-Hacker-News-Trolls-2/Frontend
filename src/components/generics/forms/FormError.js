/// external modules ///
import React from 'react';

/***************************************
  COMPONENT
***************************************/
const FormError = ({ name , touched , errors , ...rest }) => {
  return (
    <div className={`form-item-errors ${name}`}>
      {touched[name] && errors[name] && (<p>{errors[name]}</p>)}
    </div>
  );
}

/**************************************/
export default FormError;
