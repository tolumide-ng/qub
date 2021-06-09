import { SpecificBrandDef } from "../../../../commonTypes";
import { getAllBrands } from "../../../../utilities/helpers/mockApiCalls";
import { AppThunk, StoreActionPropsDefs } from "../../types";
import { BRANDS_FAILURE, BRANDS_PENDING, BRANDS_SUCCESS } from "../actionTypes";
import {
    BrandsFailureActionDef,
    BrandsPendingActionDef,
    BrandsSuccessActionDef,
} from "../types";

export const fetchBrandsPending = (): BrandsPendingActionDef => ({
    type: BRANDS_PENDING,
    payload: {
        status: "loading",
        error: null,
        brands: [],
    },
});

export const fetchBrandsFailure = (error: string): BrandsFailureActionDef => ({
    type: BRANDS_FAILURE,
    payload: {
        status: "loading",
        error,
        brands: [],
    },
});

export const fetchBrandsSuccess = (
    brands: Array<SpecificBrandDef>
): BrandsSuccessActionDef => ({
    type: BRANDS_SUCCESS,
    payload: {
        status: "success",
        error: null,
        brands,
    },
});

export const fetchBrandsAction =
    (props: StoreActionPropsDefs): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(fetchBrandsPending);
            const response = getAllBrands();
            dispatch(fetchBrandsSuccess(response));
        } catch (error) {
            dispatch(fetchBrandsFailure(error.message));
        }
    };
