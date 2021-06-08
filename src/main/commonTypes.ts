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
