/// internal modules ///
import check from '../utils/is-type';

export const routes = {
  CORS : 'https://cors-anywhere.herokuapp.com/',
  DS   : 'https://hackernewsapilambda.herokuapp.com/saltyuser/?format=json',
  WEB  : {
    logo : 'https://d33wubrfki0l68.cloudfront.net/df68882fa6d8db24b2afa5558fbe428ac2b52c05/8008e/assets/salt.svg',
    be : {
      base : 'https://only-salty-hackers.herokuapp.com',
      path : {
        user_sign_up : '/api/register',
        user_sign_in : '/api/login',
        users        : (id) => (`/api/users/${id}`),
        favorites    : (id) => (`/api/users/${id}/favorites`),
      }
    },
    fe : {
      base : 'https://frontend.saltiest-hacker-news-trolls-2.now.sh',
      path : {
        home  : '/',
        about : '/about',
        user_sign_up : '/user/sign-up',
        user_sign_in : '/user/sign-in',
        user_account : '/user/account',
      }
    },
    ui : {
      base : 'https://saltinator.netlify.com',
      path : {
        home  : '/',
        about : '/about',
      }
    }
  },
  HN   : {
    base : 'https://hacker-news.firebaseio.com',
    path : {
      item : (id) => (`/v0/item/${id}`),
      user : (id) => (`/v0/user/${id}`),
    }
  },
};

export const fullURL = (domain , point , ...args) => {
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
};
