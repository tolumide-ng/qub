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
    following: boolean;
    index: number;
}

export type StateType = "rest" | "loading" | "failure" | "success";

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
}
