export const routes = {
  CORS : 'https://cors-anywhere.herokuapp.com/',
  DS   : 'https://hackernewsapilambda.herokuapp.com/saltyuser/?format=json',
  WEB  : {
    be : {
      base : 'https://only-salty-hackers.herokuapp.com',
      ends : {
        'user_sign_up' : '/api/register',
        'user_sign_in' : '/api/login',
        'users'        : (id) => (`/api/users/${id}`),
        'favorites'    : (id) => (`/api/users/${id}/favorites`),
      }
    },
    fe : {
      base : 'https://frontend.saltiest-hacker-news-trolls-2.now.sh',
      ends : {
        'home'  : '/',
        'about' : '/about',
        'user_sign_up' : '/user/sign-up',
        'user_sign_in' : '/user/sign-in',
        'user_account' : '/user/account',
      }
    },
    ui : {
      base : 'https://saltinator.netlify.com',
      ends : {
        'home'  : '/',
        'about' : '/about',
      }
    }
  },
  HN   : {
    base : 'https://hacker-news.firebaseio.com',
    ends : {
      'item' : (id) => (`/v0/item/${id}`),
      'user' : (id) => (`/v0/user/${id}`),
    }
  },
};

