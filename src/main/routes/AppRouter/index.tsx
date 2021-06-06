import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, withRouter } from "react-router";
import { AllBrands } from "../../components/Pages/AllBrands";
import ErrorBoundary from "../../components/Pages/ErrorBoundary";
import { LandingPage } from "../../components/Pages/LandingPage";
import { LoadingPage } from "../../components/Pages/LoadingPage";
import { LoginPage } from "../../components/Pages/LoginPage";
import { SignupPage } from "../../components/Pages/SignupPage";
// import { NotFoundPage } from "../../components/Pages/NotFoundPage";
import { setDropDownAction } from "../../store/modules/dropDown/actions";
import { RootState } from "../../store/modules/types";
import "./index.css";

const AppRouter = () => {
    const dispatch = useDispatch();

    const dropDownSelector = useSelector(
        (state: RootState) => state.dropDownReducer
    );

    const handleCloseDropDown = () => {
        if (dropDownSelector.display) {
            dispatch(setDropDownAction(true));
        }
    };

    return (
        <div className="appwide" onClick={handleCloseDropDown}>
            <main className="appwide-container">
                <ErrorBoundary>
                    <Suspense fallback={<LoadingPage />}>
                        <Switch>
                            <Route path="/" exact>
                                {/* <LandingPage /> */}
                                <SignupPage />
                            </Route>

                            <Route path="/login" exact>
                                <LoginPage />
                            </Route>

                            <Route path="/brands" exact>
                                <AllBrands />
                            </Route>

                            {/* <Route path="/">
                                <NotFoundPage />
                            </Route> */}
                        </Switch>
                    </Suspense>
                </ErrorBoundary>
            </main>
        </div>
    );
};

export default AppRouter;
