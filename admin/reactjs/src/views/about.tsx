import { inject, observer } from "mobx-react";

const About : React.FC = () => {
    return (
        <div>About View</div>
    );
};

export default inject("auth")(observer(About));