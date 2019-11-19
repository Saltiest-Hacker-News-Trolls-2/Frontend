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
  STATES
***************************************/
const init = {
  'username' : {
    'default' : '',
  },
  'email' : {
    'default' : '',
  },
  'password' : {
    'default'    : '',
    'min_length' : 6,
    'max_length' : 60,
  },
  'agree_to_terms' : {
    'default' : false,
  },
};

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
          <button type='submit' name='submit'>Submit</button>
        </FormItem>
      </Form>
    </Card>
  );
};

const FormikUserSignUpForm = withFormik ({
  mapPropsToValues : (values) => ({
    'username'         : values.username         || init.username.default,
    'confirm_username' : values.confirm_username || init.username.default,
    'email'            : values.email            || init.email.default,
    'confirm_email'    : values.confirm_email    || init.email.default,
    'password'         : values.password         || init.password.default,
    'confirm_password' : values.confirm_password || init.password.default,
    /* 'agree_to_terms' : values.agree_to_terms || init.agree_to_terms.default, */
  }),
  validationSchema : Yup.object ().shape ({
    'username' : Yup.string ()
      .required ('You must provide your username.')
      .trim (),
    'confirm_username' : Yup.string ()
      .required ('You must confirm your username.')
      .trim ()
      .oneOf ([Yup.ref ('username') , null] , 'Those usernames do not match.'),
    'email' : Yup.string ()
      .required ('You must provide your email.')
      .trim ()
      .email ('That email address is not valid.'),
    'confirm_email' : Yup.string ()
      .required ('You must confirm your email.')
      .trim ()
      .oneOf ([Yup.ref ('email') , null] , 'Those emails do not match.'),
    'password' : Yup.string ()
      .required ('You must provide a password.')
      .min (init.password.min_length, `Your password must be no less than ${init.password.min_length} characters long.`)
      .max (init.password.max_length, `Your password must be no more than ${init.password.max_length} characters long.`),
    'confirm_password' : Yup.string ()
      .required ('You must confirm your password.')
      .oneOf ([Yup.ref ('password') , null] , 'Those passwords do not match.'),
    /*
    'agree_to_terms' : Yup.boolean ()
      .required ('You must choose whether to accept the Terms of Service.')
      .oneOf ([true] , 'You must accept the Terms of Service.'),
    */
  }),
  handleSubmit : (values, { props : { submit } , setSubmitting , resetForm }) => {
    try {
      console.log ('--- submitting... ---');
      console.log (values);
      submit (values);
      console.log ('--- success! ---');
      resetForm ();
    }
    catch (error) {
      console.log ('--- failure! ---')
      console.log (error);
    }
    finally {
      setSubmitting (false);
    }
  }
}) (UserSignUpForm);

/**************************************/
export default FormikUserSignUpForm;
