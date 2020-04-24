import { faUserPlus, faUser } from "@fortawesome/free-solid-svg-icons";

export function getLoginTitle(pathname) {
  if (pathname === "/sign-up") {
    return "SIGN-UP ACCOUNT";
  }

  return "LOGIN INTO ACCOUNT";
}

export function getLoginIcon(pathname) {
  if (pathname === "/sign-up") {
    return faUserPlus;
  }

  return faUser;
}

export function getLoginButtonText(pathname) {
  if (pathname === "/sign-up") {
    return "Sign Up";
  }

  return "Login";
}

export function getLoginUrl(pathname) {
  if (pathname === "/sign-up") {
    return "http://movies-app-siit.herokuapp.com/auth/register";
  }

  return "http://movies-app-siit.herokuapp.com/auth/login";
}
