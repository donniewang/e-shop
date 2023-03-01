import { action, makeObservable, observable } from "mobx";

class UserStore {

    constructor() {
        makeObservable(this);
    }

    @observable users:any = {};

    @action getAll = async () => {
        this.users = { loading:true };
        //TODO
        this.users = {};
    }

}

export default UserStore;
