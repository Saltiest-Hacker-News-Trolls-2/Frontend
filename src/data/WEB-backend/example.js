/*******************************************************************************
  EXAMPLE DATA
*******************************************************************************/

export const base_url = "https://only-salty-hackers.herokuapp.com";

/***************************************
  USER
***************************************/

export const user = {
  /*******************
    USER SIGN UP
  --------------------
    from: <https://github.com/Saltiest-Hacker-News-Trolls-2/backend#user-registration>
  *******************/
  "post/sign_up" : {
    "rest_url" : "/api/register",
    "message" : [{
      "username" : "salty_Dud3",
      "password" : "n4J3%Lp",
      "email"    : "imsosalty@saltymail.com",
    }],
    "success" : [{
      "username"  : "salty_Dud3",
      "id"        : 1,
      "favorites" : [],
      "token"     : "fjbifjlbia4335.4534vsla32w.fwlfj4sfsarasafd8",
    }],
    "failure" : [{
      "errors": {
        "username" : "A username is required to register.",
        "email"    : "An email is required to register.",
        "password" : "A password is required to register.",
      },
    },{
      "errors": {
        "username" : "Username may only contain letters, numbers, and underscores.",
      },
    },{
      "errors": {
        "username" :"Sorry, that username is unavailable.",
      },
    },{
      "errors" : {
        "email" :"Please provide a valid email address.",
      },
    },{
      "errors" : {
        "email" : "An account has already been registered with that email address.",
      },
    }],
  },

  /*******************
    USER SIGN IN
  --------------------
    from: <https://github.com/Saltiest-Hacker-News-Trolls-2/backend#user-login>
  *******************/
  "post/sign_in" : {
    "rest_url" : "/api/login",
    "message" : [{
      "username" : "salty_Dud3",
      "password" : "n4J3%Lp",
    }],
    "success" : [{
      "username"  : "salty_Dud3",
      "id"        : 1,
      "favorites" : [ 342 , 673 , 122 , 560 ],
      "token"     : "fjbifjlbia4335.4534vsla32w.fwlfj4sfsarasafd8",
    }],
    "failure" : [{
        "errors": [
          "Invalid Credentials"
        ],
    },{
      "errors": {
        "username" : "That username and password do not match.",
        "password" : "That username and password do not match.",
      },
    },{
      "errors" : {
        "username" : "A username is required to log in.",
        "password" : "A password is required to log in.",
      },
    }],
  },

  /*******************
    GET USER
  --------------------
    from: <https://github.com/Saltiest-Hacker-News-Trolls-2/backend#get-user-data>
  *******************/
  "get" : {
    "rest_url" : "/api/users/:id",
    "success" : [{
      "username"  : "salty_Dud3",
      "id"        : 1,
      "favorites" : [ 342 , 673 , 122 , 560 ],
    }],
    "failure" : [{
      "errors": [
        "Invalid Token"
      ],
    },{
      "errors": [
        "Not Authorized"
      ],
    }],
  },

  /*******************
    DELETE USER
  --------------------
    from: <https://github.com/Saltiest-Hacker-News-Trolls-2/backend#delete-user>
  *******************/
  "delete" : {
    "rest_url" : "/api/users/:id",
    "success" : [{
      "message" : "User account successfully deleted.",
    }],
    "failure" : [{
      "errors": [
        "Invalid Token"
      ],
    },{
      "errors": [
        "Not Authorized"
      ],
    }],
  },
};

/***************************************
  FAVORITES
***************************************/

export const favorites = {
  /*******************
    GET FAVORITES
  --------------------
    from: <https://github.com/Saltiest-Hacker-News-Trolls-2/backend#get-user-favorites>
  *******************/
  "get" : {
    "rest_url" : "/api/users/:id/favorites",
    "success" : [{
      "favorites" : [ 342 , 673 , 122 , 560 ],
    }],
    "failure" : [{
      "errors": [
        "Invalid Token"
      ],
    },{
      "errors": [
        "Not Authorized"
      ],
    }],
  },

  /*******************
    ADD FAVORITE
  --------------------
    from: <https://github.com/Saltiest-Hacker-News-Trolls-2/backend#add-favorite>
  *******************/
  "post" : {
    "rest_url" : "/api/users/:id/favorites",
    "message" : [{
      "comment" : 5,
    }],
    "success" : [{
      "favorites" : [ 342 , 673 , 122 , 560 , 5 ],
    }],
    "failure" : [{
      "errors": [
        "Invalid Token"
      ],
    },{
      "errors": [
        "Not Authorized"
      ],
    },{
      "errors" : {
        "comment" : "A comment ID is required."
      }
    },{
      "errors" : {
        "comment" : "Comment must be an integer."
      }
    }],
  },

  /*******************
    DELETE FAVORITE
  --------------------
    from: <https://github.com/Saltiest-Hacker-News-Trolls-2/backend#delete-favorite>
  *******************/
  "delete" : {
    "rest_url" : "/api/users/:id/favorites",
    "message" : [{
      "comment" : 5,
    }],
    "success" : [{
      "favorites" : [ 342 , 673 , 122 , 560 ],
    }],
    "failure" : [{
      "errors": [
        "Invalid Token"
      ],
    },{
      "errors": [
        "Not Authorized"
      ],
    },{
      "errors" : {
        "comment" : "A comment ID is required."
      }
    },{
      "errors" : {
        "comment" : "Comment must be an integer."
      }
    }],
  },
};
