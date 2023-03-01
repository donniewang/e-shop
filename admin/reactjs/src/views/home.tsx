import { inject, observer } from "mobx-react";

const Home : React.FC = (props:any) => {

    console.log(props.auth.user);

    return (
        <div>Home View</div>
    );
};

export default inject("auth")(observer(Home));