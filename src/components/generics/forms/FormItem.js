/// external modules ///
import React from 'react';

/// internal modules ///
import FormError from './FormError';

/***************************************
  COMPONENT
***************************************/
const FormItem = ({ children , ...rest }) => {
  return (
    <div className={`form-item ${rest.name} ${rest.className || ''}`.trim ()}>
      {children}
      {FormError (rest)}
    </div>
  );
};

/**************************************/
export default FormItem;
