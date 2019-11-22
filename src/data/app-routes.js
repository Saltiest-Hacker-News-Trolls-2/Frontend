/// internal modules ///
import check from '../utils/is-type';

export const routes = {
  here : {
    logo : 'https://d33wubrfki0l68.cloudfront.net/df68882fa6d8db24b2afa5558fbe428ac2b52c05/8008e/assets/salt.svg',
    BE : {
      base : 'https://only-salty-hackers.herokuapp.com',
      path : {
        user_sign_up : '/api/register',
        user_sign_in : '/api/login',
        users        : (id) => (`/api/users/${id}`),
        favorites    : (id) => (`/api/users/${id}/favorites`),
      }
    },
    FE : {
      base : 'https://frontend.saltiest-hacker-news-trolls-2.now.sh',
      path : {
        home  : '/',
        about : '/about',
        user_sign_up : '/user/sign-up',
        user_sign_in : '/user/sign-in',
        user_account : '/user/account',
      }
    },
    UI : {
      base : 'https://saltinator.netlify.com',
      path : {
        home  : '/',
        about : '/about',
      }
    },
    DS : 'https://hackernewsapilambda.herokuapp.com/saltyuser/?format=json',
  },
  there : {
    CORS : 'https://cors-anywhere.herokuapp.com/',
    HN : {
      base : 'https://hacker-news.firebaseio.com',
      path : {
        item : (id) => (`/v0/item/${id}`),
        user : (id) => (`/v0/user/${id}`),
      }
    },
  },
};

export const fullURL = (domain , point , ...args) => {
  // simply return domain as url if it's a string
  if (check.isString (domain)) {
    return (domain);
  }
  // compose url if domain looks right
  else if (check.isObject (domain) && check.isString (domain.base)) {
    let base = domain.base;
    let path = '';

    // add point if it's a String
    if (check.isString (point)) {
      path = domain.path[point];
    }

    // use args in endpoint
    if (check.isFunction (path)) {
      path = path (...args);
    }

    return (base + path);
  }
  // otherwise
  else {
    return (null);
  }
};
