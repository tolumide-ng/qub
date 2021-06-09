import actionTypes from "../actionTypes";
import { brands as initialState } from "../index";
import { BrandsStateDef, BrandsActionType } from "../types";

const brandTypes = [...actionTypes];

export const brandsReducer = (
    state = initialState,
    brandsProps: BrandsActionType
): BrandsStateDef => {
    return brandTypes.includes(brandsProps.type)
        ? { ...state, ...brandsProps.payload }
        : state;
};

export default brandsReducer;
