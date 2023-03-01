import { defineStore } from "pinia";


export const userStore = defineStore({
    id:"user",
    state: () => ({
        users: {}
    }),
    actions: {
        async getAll() {
            this.users = { loading: true };
            //TODO
            this.users = {};
        }
    }
})