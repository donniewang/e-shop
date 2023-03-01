import { action, makeObservable, observable } from "mobx";

class AuthStore {

    constructor() {
        makeObservable(this);
    }

    @observable user:any = JSON.parse(localStorage.getItem('user')||'null')

    @observable returnURL:any = null;

    @action login = async (username:string,password:string,navigate:any) => {
        // TODO
        await setTimeout(()=>{}, 500);
        const user = {username,password};
        this.user = user;

        localStorage.setItem('user',JSON.stringify(user));

        if(navigate) {
            navigate("/");
        }
    };

    @action logout = (navigate:any) => {
        this.user = null;
        localStorage.removeItem('user');

        if(navigate) {
            navigate("/login");
        }
    }

};

export default AuthStore;