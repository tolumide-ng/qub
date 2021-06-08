import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, withRouter } from "react-router";
import { AllBrands } from "../../components/Pages/AllBrands";
import { BrandUsersPage } from "../../components/Pages/BrandUsersPage";
import ErrorBoundary from "../../components/Pages/ErrorBoundary";
import { LandingPage } from "../../components/Pages/LandingPage";
import { LoadingPage } from "../../components/Pages/LoadingPage";
import { LoginPage } from "../../components/Pages/LoginPage";
import { NotFoundPage } from "../../components/Pages/NotFoundPage";
import { SignupPage } from "../../components/Pages/SignupPage";
import { SpecificBrandPage } from "../../components/Pages/SpecificBrandPage";
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
                                <LoginPage />
                            </Route>

                            <Route path="/signup" exact>
                                <SignupPage />
                            </Route>

                            <Route path="/signup/brand" exact>
                                {/* <LandingPage /> */}
                                <SignupPage brands={true} />
                            </Route>

                            <Route path="/brands" exact>
                                <AllBrands />
                            </Route>

                            <Route path="/brand/users" exact>
                                <BrandUsersPage />
                            </Route>

                            <Route path="/brand/:id" exact>
                                <SpecificBrandPage />
                            </Route>

                            <Route path="*">
                                <NotFoundPage />
                            </Route>
                        </Switch>
                    </Suspense>
                </ErrorBoundary>
            </main>
        </div>
    );
};

export default AppRouter;
