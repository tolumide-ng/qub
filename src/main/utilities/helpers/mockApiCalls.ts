import { allBrands } from "../../../staticData/allBrands";
import { allUsers } from "../../../staticData/allUsers";
import {
    SpecificBrandDef,
    UserDef,
    UserInfoDef,
    GetBrandDef,
    FollowBrandDef,
    UserCreateDef,
    GetBrandByNameDef,
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

export const createNewUser = (data: UserCreateDef): object => {
    const userExists = allUsers.find((user) => user.email === data.email);

    if (userExists) {
        throw Error("Email already exists");
    } else {
        if (data.balance >= 0 && data.brand && data.role === "admin") {
            allBrands.push({
                brandName: data.brand,
                balance: data.balance,
                followers: [],
                index: allBrands.length,
            });

            const modifiedData = { ...data, brand: allBrands.length - 1 };
            allUsers.push(modifiedData);
        } else {
            const { firstName, lastName, email, password, role } = data;
            const modifiedData = { firstName, lastName, email, password, role };

            allUsers.push(modifiedData);
        }

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

export const getBrandByName = (data: GetBrandByNameDef) => {
    const theBrand = allBrands.find((brand) => brand.brandName === data.name);

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
            followers: [
                ...allBrands[theBrand].followers,
                {
                    email: data.email,
                    points: allBrands[theBrand].balance,
                    redeemed: false,
                },
            ],
        };
    } else {
        throw new Error("Brand does not exist");
    }
};

export const redeemPoints = (data: FollowBrandDef) => {
    const theBrand = allBrands.findIndex((brand) => brand.index === data.id);

    if (theBrand >= 0) {
        const theUser = allBrands[theBrand].followers.findIndex(
            (user) => user.email === data.email
        );

        if (theUser >= 0) {
            const originalPoints =
                allBrands[theBrand].followers[theUser].points;

            const toDeduct = originalPoints * (75 / 100);

            allBrands[theBrand].followers[theUser] = {
                ...allBrands[theBrand].followers[theUser],
                points: originalPoints - toDeduct,
                redeemed: true,
            };
        }
    } else {
        throw new Error("Brand does not exist");
    }
};
