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
      {React.cloneElement (children , props , [])}
      {FormError (props)}
    </div>
  );
};

/**************************************/
export default FormItem;
