import { StateType } from "../../../commonTypes";
import { BRANDS_FAILURE, BRANDS_PENDING, BRANDS_SUCCESS } from "./actionTypes";

export interface BrandsStateDef {
    readonly status: StateType;
    readonly error: string | null;
    readonly brands: [];
}

export interface BrandsPendingActionDef {
    type: typeof BRANDS_PENDING;
    payload: BrandsStateDef;
}

export interface BrandsFailureActionDef {
    type: typeof BRANDS_FAILURE;
    payload: BrandsStateDef;
}

export interface BrandsSuccessActionDef {
    type: typeof BRANDS_SUCCESS;
    payload: BrandsStateDef;
}

export type BrandsActionType =
    | BrandsPendingActionDef
    | BrandsFailureActionDef
    | BrandsSuccessActionDef;
