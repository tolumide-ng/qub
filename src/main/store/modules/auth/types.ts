import { StateType } from "../../../commonTypes";
import { AUTH_FAILURE, AUTH_PENDING, AUTH_SUCCESS } from "./actionTypes";

export interface AuthStateDef {
    readonly authError: string | null;
    readonly isAuthenticated: boolean;
    readonly user: {};
    readonly status: StateType;
}

export interface AuthPendingActionDef {
    type: typeof AUTH_PENDING;
    payload: AuthStateDef;
}

export interface AuthFailureActionDef {
    type: typeof AUTH_FAILURE;
    payload: AuthStateDef;
}

export interface AuthSuccessActionDef {
    type: typeof AUTH_SUCCESS;
    payload: AuthStateDef;
}

export type AuthActionType =
    | AuthPendingActionDef
    | AuthSuccessActionDef
    | AuthFailureActionDef;
