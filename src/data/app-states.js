export const isLoggedIn = () => (localStorage.getItem ('isLoggedIn') === true);
export const isSignedIn = isLoggedIn;
