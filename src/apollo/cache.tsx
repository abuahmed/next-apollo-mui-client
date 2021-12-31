import { InMemoryCache, makeVar } from "@apollo/client";
import { AuthUser } from "./models/user";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isUserLoggedIn: {
          read() {
            return isUserLoggedInVar();
          },
        },
        isDarkMode: {
          read() {
            return isDarkModeVar();
          },
        },
        authUser: {
          read() {
            return authUserVar();
          },
        },
      },
    },
  },
});
//const IS_SERVER = typeof window === "undefined";
const isLoggedIn = () =>
  typeof window !== "undefined" ? !!localStorage.getItem("userInfo") : false;

const isDark =
  typeof window !== "undefined"
    ? localStorage.getItem("mode") && localStorage.getItem("mode") === "dark"
      ? true
      : false
    : false;
const authUser = (user?: AuthUser) => {
  //console.log(user);
  if (user) return user;
  else if (
    typeof window !== "undefined" &&
    !!localStorage.getItem("userInfo")
  ) {
    return JSON.parse(localStorage.getItem("userInfo") as string);
  } else return null;
};
export const isUserLoggedInVar = makeVar(isLoggedIn());
export const isDarkModeVar = makeVar<boolean>(isDark);
export const authUserVar = makeVar<AuthUser>(authUser());
