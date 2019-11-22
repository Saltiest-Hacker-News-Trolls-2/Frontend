/// external modules ///
import React from 'react';
import { withFormik , Form , Field } from 'formik';
import * as Yup from 'yup';

/// internal modules ///
import * as fi from './Form-helpers';
import Card from '../generics/cards/Card';
import CardHead from '../generics/cards/CardHead';
import CardBody from '../generics/cards/CardBody';
// import CardFoot from '../generics/cards/CardFoot';
import FormItem from '../generics/forms/FormItem';

/// app data ///
import { routes } from './data/app-routes';
import { isSignedIn } from './data/app-states';

/// styles ///
import './styles.css';

/***************************************
  COMPONENT
***************************************/
const UserSignUpForm = (props) => {
  // if (isSignedIn ()) {
  //   props.history.push (routes.fe.ends.user_account);
  //   window.location.reload ();
  // }
  return (
    <Card className='user-sign-up t-to-b' col>
      <CardHead>
        <h2>Sign Up</h2>
      </CardHead>
      <CardBody>
        <Form className='user-sign-up t-to-b'>
          <FormItem {...props} name='username'>
            <Field type='text' name='username' placeholder='Username'/>
          </FormItem>
          <FormItem {...props} name='confirm_username'>
            <Field type='text' name='confirm_username' placeholder='Confirm Your Username'/>
          </FormItem>
          <FormItem {...props} name='email'>
            <Field type='email' name='email' placeholder='Email'/>
          </FormItem>
          <FormItem {...props} name='confirm_email'>
            <Field type='email' name='confirm_email' placeholder='Confirm Your Email'/>
          </FormItem>
          <FormItem {...props} name='password'>
            <Field type='password' name='password' placeholder='Password'/>
          </FormItem>
          <FormItem {...props} name='confirm_password'>
            <Field type='password' name='confirm_password' placeholder='Confirm Your Password'/>
          </FormItem>
          {/* <FormItem {...props} name='agree_to_terms'>
            <Field type='checkbox' name='agree_to_terms' checked={props.values.agree_to_terms}/>
            <label htmlFor='agree_to_terms'>I accept the <a href='#'>Terms of Service</a>.</label>
          </FormItem> */}
          <FormItem {...props} name='submit'>
            <button type='submit' name='submit' className='primary'>Submit</button>
          </FormItem>
        </Form>
      </CardBody>
      {/* <CardFoot></CardFoot> */}
    </Card>
  );
};

const FormikUserSignUpForm = withFormik ({
  mapPropsToValues : fi.mapPropsToValues,
  validationSchema : Yup.object ().shape (fi.partialSchemaShape ([
    'username' , 'confirm_username' ,
    'password' , 'confirm_password' ,
    'email'    , 'confirm_email'    ,
  ])),
  handleSubmit : fi.handlePartialSubmit ([
    'username' ,
    'password' ,
    'email'    ,
  ]),
}) (UserSignUpForm);

/**************************************/
export default FormikUserSignUpForm;
