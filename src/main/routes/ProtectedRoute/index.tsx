import * as React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";
import { RoutePropDef } from "../../commonTypes";
import { LoginPage } from "../../components/Pages/LoginPage";
import { RootState } from "../../store/modules/types";

export const ProtectedRoute = (props: RoutePropDef) => {
    const selector = useSelector((state: RootState) => state.authReducer);

    return (
        <>
            {selector.status === "success" &&
            props.type === selector.user?.role ? (
                <Route exact={props.exact} path={props.path}>
                    {props.component}
                </Route>
            ) : (
                <Route>
                    <LoginPage />
                </Route>
            )}
        </>
    );
};
