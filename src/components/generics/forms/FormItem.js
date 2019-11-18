/// external modules ///
import React from 'react';

/// internal modules ///
import FormError from './FormError';

/***************************************
  COMPONENT
***************************************/
const FormItem = ({ children , ...props }) => {
  return (
    <div className={`form-item ${props.name}`}>
      {children}
      {FormError (props)}
    </div>
  );
};

/**************************************/
export default FormItem;
