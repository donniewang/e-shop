import router from "@/router";
import { defineStore } from "pinia";

export const authStore = defineStore({
    id:"auth",
    state: () : {
        user: any;
        returnURL: any;
    } => ({
        user: JSON.parse(localStorage.getItem('user')||'null'),
        returnURL: null
    }),
    actions:{
        async login(username:string,password:string) {
            // TODO
            await setTimeout(()=>{}, 500);
            const user = {username,password};
            this.user = user;

            localStorage.setItem('user',JSON.stringify(user));

            router.push(this.returnURL || '/');
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }
    }
});