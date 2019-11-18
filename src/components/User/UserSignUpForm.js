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
  'name' : {
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
  'tos' : {
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
  mapPropsToValues : (values) => ({
    'name'     : values.name     || init.name.default,
    'email'    : values.email    || init.email.default,
    'password' : values.password || init.password.default,
    'tos'      : values.tos      || init.tos.default,
  }),
  validationSchema : Yup.object ().shape ({
    'name'     : Yup.string ()
      .required ('You must provide your name.')
      .trim (),
    'email'    : Yup.string ()
      .required ('You must provide your email.')
      .email ('That email address is not valid.'),
    'password' : Yup.string ()
      .required ('You must provide a password.')
      .min (init.password.min_length, `Your password must be no less than ${init.password.min_length} characters long.`)
      .max (init.password.max_length, `Your password must be no more than ${init.password.max_length} characters long.`),
    // 'tos'      : Yup.boolean ()
    //   .required ('You must choose whether to accept the Terms of Service.')
    //   .oneOf ([true] , 'You must accept the Terms of Service.'),
  }),
  handleSubmit : (values, { props : { submit } , setSubmitting , resetForm }) => {
    try {
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
}) (UserSignUpForm);

/**************************************/
export default FormikUserSignUpForm;
