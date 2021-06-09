import { allBrands } from "../../../staticData/allBrands";
import { allUsers } from "../../../staticData/allUsers";
import {
    SpecificBrandDef,
    UserDef,
    UserInfoDef,
    GetBrandDef,
    FollowBrandDef,
} from "../../commonTypes";

export const authenticateUser = (data: UserDef): object => {
    const userExists = allUsers.find(
        (user) => user.email === data.email && user.password === data.password
    );

    if (userExists) {
        return { ...userExists, password: "" };
    }
    throw new Error("Email and Password does not match");
};

export const createNewUser = (data: UserInfoDef): object => {
    const userExists = allUsers.find((user) => user.email === data.email);

    if (userExists) {
        throw Error("Email already exists");
    } else {
        allUsers.push(data);
        return { ...data, password: "" };
    }
};

export const getAllBrands = (): Array<SpecificBrandDef> => {
    return allBrands;
};

export const getSpecificBrand = (data: GetBrandDef): SpecificBrandDef => {
    const theBrand = allBrands.find((brand) => brand.index === data.id);

    if (theBrand) {
        return theBrand;
    } else {
        throw new Error("Brand does not exist");
    }
};

export const followSpecificBrand = (data: FollowBrandDef) => {
    const theBrand = allBrands.findIndex((brand) => brand.index === data.id);

    if (theBrand >= 0) {
        allBrands[theBrand] = {
            ...allBrands[theBrand],
            followers: [...allBrands[theBrand].followers, data.email],
        };
    } else {
        throw new Error("Brand does not exist");
    }
};
