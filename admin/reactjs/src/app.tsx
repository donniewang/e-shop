import { inject, observer } from 'mobx-react';
import Router from '@/router';
import AuthRouter from '@/router/auth';

const App : React.FC = ({auth}: any) => {
    console.log(auth.user);
    return (
        <AuthRouter>
            <Router/>
        </AuthRouter>
    );
}

export default inject("auth")(observer(App));