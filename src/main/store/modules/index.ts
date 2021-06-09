import { combineReducers } from "redux";
import { dropDownReducer } from "./dropDown/reducer";
import { authReducer } from "./auth/reducer";
import { brandsReducer } from "./brands/reducer";

export const rootReducer = combineReducers({
    dropDownReducer,
    authReducer,
    brandsReducer,
});

export type RootStateDef = ReturnType<typeof rootReducer>;

export default rootReducer;
