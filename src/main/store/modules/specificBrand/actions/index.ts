import { GetBrandDef, SpecificBrandDef } from "../../../../commonTypes";
import { getSpecificBrand } from "../../../../utilities/helpers/mockApiCalls";
import { AppThunk, StoreActionPropsDefs } from "../../types";
import {
    SPECIFIC_BRAND_FAILURE,
    SPECIFIC_BRAND_PENDING,
    SPECIFIC_BRAND_SUCCESS,
} from "../actionTypes";
import {
    SpecificBrandFailureActionDef,
    SpecificBrandPendingActionDef,
    SpecificBrandStateDef,
    SpecificBrandSuccessActionDef,
} from "../types";

export const fetchSpecificBrandPending = (): SpecificBrandPendingActionDef => ({
    type: SPECIFIC_BRAND_PENDING,
    payload: {
        status: "loading",
        error: null,
        brand: {},
    },
});

export const fetchSpecificBrandFailure = (
    error: string
): SpecificBrandFailureActionDef => ({
    type: SPECIFIC_BRAND_FAILURE,
    payload: {
        status: "failure",
        error,
        brand: {},
    },
});

export const fetchSpecificBrandSuccess = (
    brand: SpecificBrandDef
): SpecificBrandSuccessActionDef => ({
    type: SPECIFIC_BRAND_SUCCESS,
    payload: {
        status: "success",
        error: null,
        brand,
    },
});

// export const fetchSpecificBrandReset = (brand: SpecificBrandStateDef): Specific

export const fetchSpecificBrandAction =
    (props: StoreActionPropsDefs): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(fetchSpecificBrandPending());
            const response = getSpecificBrand(props.payload as GetBrandDef);
            dispatch(fetchSpecificBrandSuccess(response));
        } catch (error) {
            dispatch(fetchSpecificBrandFailure(error.message));
        }
    };
