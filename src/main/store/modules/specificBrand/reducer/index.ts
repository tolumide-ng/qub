import actionTypes from "../actionTypes";
import { specificBrand as initialState } from "../index";
import { SpecificBrandStateDef, SpecificBrandActionType } from "../types";

const specificBrandTypes = [...actionTypes];

export const specificBrandReducer = (
    state = initialState,
    specificBrandProps: SpecificBrandActionType
): SpecificBrandStateDef => {
    return specificBrandTypes.includes(specificBrandProps.type)
        ? { ...state, ...specificBrandProps.payload }
        : state;
};

export default specificBrandReducer;
