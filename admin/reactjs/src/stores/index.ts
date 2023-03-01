import AuthStore from "./auth";
import UserStore from "./user";

export const auth = new AuthStore();
export const user = new UserStore();

const store = {
    auth,
    user
};

export default store;