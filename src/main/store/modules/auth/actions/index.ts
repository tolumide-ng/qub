import { UserDef, UserInfoDef } from "../../../../commonTypes";
import {
    authenticateUser,
    createNewUser,
} from "../../../../utilities/helpers/mockApiCalls";
import { AppThunk, StoreActionPropsDefs } from "../../types";
import { AUTH_FAILURE, AUTH_PENDING, AUTH_SUCCESS } from "../actionTypes";
import {
    AuthFailureActionDef,
    AuthPendingActionDef,
    AuthSuccessActionDef,
} from "../types";

export const fetchAuthPending = (): AuthPendingActionDef => ({
    type: AUTH_PENDING,
    payload: {
        status: "loading",
        authError: null,
        user: {},
        isAuthenticated: false,
    },
});

export const fetchAuthFailure = (authError: string): AuthFailureActionDef => ({
    type: AUTH_FAILURE,
    payload: {
        status: "failure",
        authError,
        user: {},
        isAuthenticated: false,
    },
});

export const fetchAuthSuccess = (user: {}): AuthSuccessActionDef => ({
    type: AUTH_SUCCESS,
    payload: {
        status: "success",
        authError: null,
        user,
        isAuthenticated: true,
    },
});

export const fetchAuthAction =
    (props: StoreActionPropsDefs): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(fetchAuthPending);

            if (props.path === "login") {
                const response = authenticateUser(props.payload as UserDef);
                dispatch(fetchAuthSuccess(response));
            }

            if (props.path === "signup") {
                const response = createNewUser(props.payload as UserInfoDef);
                dispatch(fetchAuthSuccess(response));
            }
        } catch (error) {
            dispatch(fetchAuthFailure(error.message));
        }
    };
