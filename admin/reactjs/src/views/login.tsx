import { inject, observer } from 'mobx-react';
import { FormEvent, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.less';

const Login : React.FC = (props:any) => {
    const username = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);

    const {auth} = props;

    const navigate = useNavigate();

    useEffect(() => {
    }, []);

    const doSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        auth.login(username.current?.value,password.current?.value,navigate);
    };

    return (
        <div className="wrapper">
            <div className="container">
                <h1>Welcome</h1>
                <form className="form" onSubmit={(e)=>{ doSubmit(e) }}>
                    <input ref={ username } type="text" placeholder="Username" />
                    <input ref={ password } type="password" placeholder="Password" />
                    <button id="login-button">Login</button>
                </form>
            </div>
            <ul className="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default inject("auth")(observer(Login));