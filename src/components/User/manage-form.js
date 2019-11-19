/*******************************************************************************
  MANAGE FORM
*******************************************************************************/

/// external modules ///
import * as Yup from 'yup';

/*//////////////////////////////////////
  UTILS
//////////////////////////////////////*/
Object.filter = (obj , fun) => (
  Object.fromEntries (Object.entries (obj).filter (fun))
);

const entriesByName = (name) => ([ key ]) => (name.includes (key));

/***************************************
  RECOGNIZED FIELDS
***************************************/
export const allFields = ({
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
});

export const fields = (names) => (
  Object.filter (allFields , entriesByName (names))
);

/***************************************
  MAP PROPS TO VALUES
***************************************/
export const map = (values) => ({
  'username'         : values.username         || allFields.username.default,
  'confirm_username' : values.confirm_username || allFields.username.default,
  'email'            : values.email            || allFields.email.default,
  'confirm_email'    : values.confirm_email    || allFields.email.default,
  'password'         : values.password         || allFields.password.default,
  'confirm_password' : values.confirm_password || allFields.password.default,
  'agree_to_terms'   : values.agree_to_terms   || allFields.agree_to_terms.default,
});

/***************************************
  VALIDATION SCHEMA
***************************************/
export const allSchema = ({
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
    .min (allFields.password.min_length , `Your password must be no less than ${allFields.password.min_length} characters long.`)
    .max (allFields.password.max_length , `Your password must be no more than ${allFields.password.max_length} characters long.`),
  'confirm_password' : Yup.string ()
    .required ('You must confirm your password.')
    .oneOf ([Yup.ref ('password') , null] , 'Those passwords do not match.'),
  'agree_to_terms' : Yup.boolean ()
    .required ('You must choose whether to accept the Terms of Service.')
    .oneOf ([true] , 'You must accept the Terms of Service.'),
});

export const schema = (names) => (
  Object.filter (allSchema , entriesByName (names))
);

/***************************************
  HANDLE SUBMIT
***************************************/
export const handleSubmit = (names) => (values, { props : { submit } , setSubmitting , resetForm }) => {

  try {
    const valuesToSubmit = Object.filter (values , entriesByName (names));
    console.log ('--- submitting... ---');
    console.log (valuesToSubmit);
    submit (valuesToSubmit);
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
};
