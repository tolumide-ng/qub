import React, { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router";
import { RoutePropDef } from "../../commonTypes";
import { AllBrands } from "../../components/Pages/AllBrands";
import { BrandUsersPage } from "../../components/Pages/BrandUsersPage";
import ErrorBoundary from "../../components/Pages/ErrorBoundary";
import { LoadingPage } from "../../components/Pages/LoadingPage";
import { LoginPage } from "../../components/Pages/LoginPage";
import { NotFoundPage } from "../../components/Pages/NotFoundPage";
import { SignupPage } from "../../components/Pages/SignupPage";
import { SpecificBrandPage } from "../../components/Pages/SpecificBrandPage";
import { RootState } from "../../store/modules/types";
import { ProtectedRoute } from "../ProtectedRoute";
import "./index.css";

export const allRoutes: Array<RoutePropDef> = [
    {
        path: "/",
        component: <LoginPage />,
        type: "all",
        exact: true,
        title: "Login",
        isProtected: false,
    },
    {
        path: "/signup",
        component: <SignupPage />,
        type: "all",
        exact: true,
        title: "Signup",
        isProtected: false,
    },
    {
        path: "/signup/brand",
        component: <SignupPage brands={true} />,
        type: "all",
        exact: true,
        title: "Brand Signup",
        isProtected: true,
    },
    {
        path: "/brands",
        component: <AllBrands />,
        type: "user",
        exact: true,
        title: "Brands",
        isProtected: true,
    },
    {
        path: "/brand/users",
        component: <BrandUsersPage />,
        type: "admin",
        exact: true,
        title: "Brand Users",
        isProtected: true,
    },
    {
        path: "/brand/:id",
        component: <SpecificBrandPage />,
        type: "user",
        exact: true,
        title: "Brand",
        isProtected: true,
    },
    {
        path: "*",
        component: <NotFoundPage />,
        type: "all",
        exact: true,
        title: "Not Found",
        isProtected: false,
    },
];

const getName = (url: string) => {
    if (url) {
        return `${url[0]?.toUpperCase()}${url?.slice(1)}`;
    } else {
        return "Home";
    }
};

const AppRouter = () => {
    const location = useLocation();
    const currentLocation = location.pathname.split("/")[1];

    useEffect(() => {
        document.title = getName(currentLocation);
    }, [currentLocation]);

    return (
        <div className="appwide">
            <main className="appwide-container">
                <ErrorBoundary>
                    <Suspense fallback={<LoadingPage />}>
                        <Switch>
                            {allRoutes.map((route) =>
                                route?.isProtected ? (
                                    <ProtectedRoute
                                        {...route}
                                        key={route.title}
                                    />
                                ) : (
                                    <Route
                                        exact={route.exact}
                                        path={route.path}
                                        key={route.title}
                                    >
                                        {route.component}
                                    </Route>
                                )
                            )}
                        </Switch>
                    </Suspense>
                </ErrorBoundary>
            </main>
        </div>
    );
};

export default AppRouter;
