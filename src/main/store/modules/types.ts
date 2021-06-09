import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootStateDef } from ".";
import {
    ForAxiosDefs,
    SpecificBrandDef,
    StateType,
    UserInfoDef,
} from "../../commonTypes";

export interface RootState {
    dropDownReducer: {
        display: boolean;
    };

    authReducer: {
        authError: string | null;
        status: StateType;
        user: UserInfoDef;
        isAuthenticated: boolean;
    };

    brandsReducer: {
        brands: Array<SpecificBrandDef>;
        status: StateType;
        error: string | null;
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
