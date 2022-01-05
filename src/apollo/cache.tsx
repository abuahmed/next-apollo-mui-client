import { InMemoryCache, makeVar } from "@apollo/client";
import { AuthUser } from "./models/user";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
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

const isDark =
  typeof window !== "undefined"
    ? localStorage.getItem("mode") && localStorage.getItem("mode") === "dark"
      ? true
      : false
    : false;
const authUser = () => {
  if (typeof window !== "undefined" && !!localStorage.getItem("userInfo"))
    return JSON.parse(localStorage.getItem("userInfo") as string);
  else return null;
};
export const isDarkModeVar = makeVar<boolean>(isDark);
export const authUserVar = makeVar<AuthUser>(authUser());
