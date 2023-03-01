import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import('@/views/home'));
const Login = React.lazy(() => import('@/views/login'));
const About = React.lazy(() => import('@/views/about'));

export const routes = [
    {
        path: '/',
        element: (
            <Suspense fallback={<>loading Users</>}>
                <Home />
            </Suspense>
        ),
        children: [],
    },
    {
        path: '/login',
        element: (
            <Suspense fallback={<>loading Users</>}>
                <Login />
            </Suspense>
        ),
        children: [],
    },
    {
        path: '/about',
        element: (
            <Suspense fallback={<>loading Users</>}>
                <About />
            </Suspense>
        ),
        children: [],
    },
];

const GenRoute = (route: any) => {
    if (route.children.length === 0) {
        return <Route key={route.path} path={route.path} element={route.element} />
    } else {
        return (
            <Route key={route.path} path={route.path} element={route.element}>
                {route.children.map((route: any) => GenRoute(route))}
            </Route>
        )
    }
}

const Router: React.FC = () => (
    <Routes>{routes.map((route) => GenRoute(route))}</Routes>
);

export default Router;