import { combineReducers } from "redux";
import { dropDownReducer } from "./dropDown/reducer";
import { authReducer } from "./auth/reducer";

export const rootReducer = combineReducers({
    dropDownReducer,
    authReducer,
});

export type RootStateDef = ReturnType<typeof rootReducer>;

export default rootReducer;
