import { combineReducers } from "redux";
import { dropDownReducer } from "./dropDown/reducer";
import { authReducer } from "./auth/reducer";
import { brandsReducer } from "./brands/reducer";
import { specificBrandReducer } from "./specificBrand/reducer";

export const rootReducer = combineReducers({
    dropDownReducer,
    authReducer,
    brandsReducer,
    specificBrandReducer,
});

export type RootStateDef = ReturnType<typeof rootReducer>;

export default rootReducer;
