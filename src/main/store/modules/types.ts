import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootStateDef } from ".";
import { ForAxiosDefs, StateType } from "../../commonTypes";

export interface RootState {
    dropDownReducer: {
        display: boolean;
    };

    authReducer: {
        authError: string | null;
        status: StateType;
        user: {};
        isAuthenticated: boolean;
    };
}

export interface StoreActionPropsDefs {
    path: string;
    payload: {};
    method: ForAxiosDefs;
    params?: {};
}

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootStateDef,
    unknown,
    Action<string>
>;
