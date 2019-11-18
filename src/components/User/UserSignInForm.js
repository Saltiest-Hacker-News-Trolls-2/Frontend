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
    'default' : '',
  },
};

/***************************************
  COMPONENT
***************************************/
const UserSignInForm = (props) => {
  return (
    <Card>
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
    </Card>
  );
};

const FormikUserSignInForm = withFormik ({
  mapPropsToValues : (values) => ({
    'username' : values.username || init.username.default,
    /* 'email' : values.email || init.email.default, */
    'password' : values.password || init.password.default,
  }),
  validationSchema : Yup.object ().shape ({
    'username' : Yup.string ()
      .required ('You must provide your username.')
      .trim (),
    /*
    'email' : Yup.string ()
      .required ('You must provide your email.')
      .email ('That email address is not valid.'),
    */
    'password' : Yup.string ()
      .required ('You must provide a password.'),
  }),
  handleSubmit : (values, { props : { submit } , setSubmitting , resetForm }) => {
    try {
      console.log ('--- submitting... ---');
      console.log (values);
      console.log ('--- success! ---');
      submit (values);
      resetForm ();
    }
    catch (error) {
      console.log ('--- failure! ---')
      console.log (error);
    }
    finally {
      setSubmitting (false);
    }
    // axios
    //   .post ("https://reqres.in/api/users" , values)
    //   .then ((response) => {
    //     console.log ('--- success! ---')
    //     console.log (response);
    //     addUser (response.data);
    //     resetForm ();
    //   })
    //   .catch ((error) => {
    //     console.log ('--- failure! ---')
    //     console.log (error);
    //   })
    //   .finally (() => {
    //     setSubmitting (false);
    //   });
  }
}) (UserSignInForm);

/**************************************/
export default FormikUserSignInForm;
