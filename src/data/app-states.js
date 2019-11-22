export const isLoggedIn = () => (localStorage.getItem ('isLoggedIn') === true);
export const isSignedIn = isLoggedIn;

export const isLoggedOut = () => (!isLoggedIn ());
export const isSignedOut = isLoggedOut;
