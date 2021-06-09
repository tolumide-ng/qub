import { SpecificBrandDef, StateType } from "../../../commonTypes";
import {
    SPECIFIC_BRAND_FAILURE,
    SPECIFIC_BRAND_PENDING,
    SPECIFIC_BRAND_SUCCESS,
    SPECIFIC_BRAND_UPDATE,
} from "./actionTypes";

export interface SpecificBrandStateDef {
    readonly brand: SpecificBrandDef | {};
    readonly status: StateType;
    readonly error: string | null;
}

export interface SpecificBrandPendingActionDef {
    type: typeof SPECIFIC_BRAND_PENDING;
    payload: SpecificBrandStateDef;
}

export interface SpecificBrandFailureActionDef {
    type: typeof SPECIFIC_BRAND_FAILURE;
    payload: SpecificBrandStateDef;
}

export interface SpecificBrandSuccessActionDef {
    type: typeof SPECIFIC_BRAND_SUCCESS;
    payload: SpecificBrandStateDef;
}

export interface SpecificBrandUpdateActionDef {
    type: typeof SPECIFIC_BRAND_UPDATE;
    payload: SpecificBrandStateDef;
}

export type SpecificBrandActionType =
    | SpecificBrandPendingActionDef
    | SpecificBrandFailureActionDef
    | SpecificBrandSuccessActionDef
    | SpecificBrandUpdateActionDef;
