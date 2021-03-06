import { FollowBrandDef, SpecificBrandDef } from "../../../../commonTypes";
import {
    followSpecificBrand,
    getAllBrands,
} from "../../../../utilities/helpers/mockApiCalls";
import { AppThunk, StoreActionPropsDefs } from "../../types";
import {
    BRANDS_FAILURE,
    BRANDS_PENDING,
    BRANDS_SUCCESS,
    BRANDS_UPDATE,
} from "../actionTypes";
import {
    BrandsFailureActionDef,
    BrandsPendingActionDef,
    BrandsSuccessActionDef,
    BrandsUpdateActionDef,
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

export const fetchBrandsUpdate = (
    brands: Array<SpecificBrandDef>
): BrandsUpdateActionDef => ({
    type: BRANDS_UPDATE,
    payload: {
        status: "update",
        error: null,
        brands,
    },
});

export const fetchBrandsAction =
    (props: StoreActionPropsDefs): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(fetchBrandsPending);
            if (props.method === "GET") {
                //
            }

            if (props.method === "PATCH") {
                followSpecificBrand(props.payload as FollowBrandDef);
            }

            const response = getAllBrands();
            dispatch(fetchBrandsSuccess(response));
        } catch (error) {
            dispatch(fetchBrandsFailure(error.message));
        }
    };
