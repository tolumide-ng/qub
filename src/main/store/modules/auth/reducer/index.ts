import actionTypes from "../actionTypes";
import { auth as initialState } from "../index";
import { AuthStateDef, AuthActionType } from "../types";

const authTypes = [...actionTypes];

export const authReducer = (
    state = initialState,
    authProps: AuthActionType
): AuthStateDef => {
    return authTypes.includes(authProps.type)
        ? { ...state, ...authProps.payload }
        : state;
};

export default authReducer;
