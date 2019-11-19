/// external modules ///
import React from 'react';
import { withFormik , Form , Field } from 'formik';
import * as Yup from 'yup';

/// internal modules ///
import Card from '../generics/cards/Card';
import CardHead from '../generics/cards/CardHead';
import CardBody from '../generics/cards/CardBody';
import CardFoot from '../generics/cards/CardFoot';
import FormItem from '../generics/forms/FormItem';

/***************************************
  COMPONENT
***************************************/
const UserSignUpForm = (props) => {
  return (
    <Card>
      <Form className='user-sign-up'>
        <FormItem {...props} name='username'>
          <Field type='text' name='username' placeholder='Username'/>
        </FormItem>
        <FormItem {...props} name='email'>
          <Field type='email' name='email' placeholder='Email'/>
        </FormItem>
        <FormItem {...props} name='password'>
          <Field type='password' name='password' placeholder='Password'/>
        </FormItem>
        {/* <FormItem {...props} name='tos'>
          <Field type='checkbox' name='tos' checked={props.values.tos}/>
          <label htmlFor="tos">I accept the <a href="#">Terms of Service</a>.</label>
        </FormItem> */}
        <FormItem {...props} name='submit'>
          <button type='submit' name='submit'>Submit</button>
        </FormItem>
      </Form>
    </Card>
  );
};

const FormikUserSignUpForm = withFormik ({
  mapPropsToValues : fi.mapPropsToValues,
  validationSchema : Yup.object ().shape (fi.partialSchemaShape ([
    'username' , 'confirm_username' ,
    'email'    , 'confirm_email'    ,
    'password' , 'confirm_password' ,
  ])),
  handleSubmit : fi.handlePartialSubmit ([
    'username' ,
    'email'    ,
    'password' ,
  ]),
}) (UserSignUpForm);

/**************************************/
export default FormikUserSignUpForm;
