export type ForAxiosDefs =
    | "get"
    | "GET"
    | "delete"
    | "DELETE"
    | "head"
    | "HEAD"
    | "options"
    | "OPTIONS"
    | "post"
    | "POST"
    | "put"
    | "PUT"
    | "patch"
    | "PATCH"
    | "link"
    | "LINK"
    | "unlink"
    | "UNLINK"
    | undefined;

export interface AuthInputDef {
    label: string;
    name: string;
    type: string;
    required?: boolean;
}

export interface SpecificBrandDef {
    brandName: string;
    balance: number;
    index: number;
    followers: Array<{ email: string; points: number; redeemed: boolean }>;
}

export type StateType = "rest" | "loading" | "failure" | "success" | "update";

export interface UserDef {
    email: string;
    password: string;
}

export interface UserInfoDef {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    brand?: number;
}

export interface UserCreateDef {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    brand: string;
    balance: number;
}

export type RoutesType = "admin" | "user" | "all";

export interface RoutePropDef {
    path: string;
    component: JSX.Element;
    type: RoutesType;
    exact: boolean;
    title: string;
    isProtected: boolean;
}

export interface GetBrandDef {
    id: number;
}

export interface GetBrandByNameDef {
    name: string;
}

export interface FollowBrandDef {
    id: number;
    email: string;
}
