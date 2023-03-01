import { Navigate, useLocation } from "react-router-dom"
import {routes} from "@/router";
import {auth} from "@/stores";

const AuthRouter = (props:{children: JSX.Element}) => {
    const publicPages = ['/login'];
    const {pathname} = useLocation();
    const authRequired = !publicPages.includes(pathname);
    let route:any = null;
    for (let item of routes) {
        if (item.path === pathname) {
            route = item;
            break;
        }
    }
    if (!!!route || Object.keys(route).length === 0) {
        return <Navigate to="/" />;
    }
    if(authRequired && auth.user==null) {
        auth.returnURL = pathname;
        return <Navigate to="/login" replace />;
    }
    return props.children;
};

export default AuthRouter;