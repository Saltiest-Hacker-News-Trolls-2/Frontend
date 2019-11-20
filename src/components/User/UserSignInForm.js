/// external modules ///
import React from 'react';
import { withFormik , Form , Field } from 'formik';
import * as Yup from 'yup';

/// internal modules ///
import * as fi from './Form-helpers';
import Card from '../generics/cards/Card';
import CardHead from '../generics/cards/CardHead';
import CardBody from '../generics/cards/CardBody';
import CardFoot from '../generics/cards/CardFoot';
import FormItem from '../generics/forms/FormItem';

/***************************************
  COMPONENT
***************************************/
const UserSignInForm = (props) => {
  return (
    <Card>
      <CardHead>
        <h2>Sign In</h2>
      </CardHead>
      <CardBody>
        <Form className='user-sign-in'>
          <FormItem {...props} name='username'>
            <Field type='text' name='username' placeholder='Username'/>
          </FormItem>
          {/* <FormItem {...props} name='email'>
            <Field type='email' name='email' placeholder='Email'/>
          </FormItem> */}
          <FormItem {...props} name='password'>
            <Field type='password' name='password' placeholder='Password'/>
          </FormItem>
          <FormItem {...props} name='submit'>
            <button type='submit' name='submit'>Submit</button>
          </FormItem>
        </Form>
      </CardBody>
      <CardFoot></CardFoot>
    </Card>
  );
};

const FormikUserSignInForm = withFormik ({
  mapPropsToValues : fi.mapPropsToValues,
  validationSchema : Yup.object ().shape (fi.partialSchemaShape ([
    'username' ,
    'password' ,
  ])),
  handleSubmit : fi.handlePartialSubmit ([
    'username' ,
    'password' ,
  ]),
}) (UserSignInForm);

/**************************************/
export default FormikUserSignInForm;
