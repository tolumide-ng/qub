import { allUsers } from "../../../staticData/allUsers";
import { UserDef, UserInfoDef } from "../../commonTypes";

const checkUserExists = (data: UserDef) =>
    allUsers.find(
        (user) => user.email === data.email && user.password === data.password
    );

export const authenticateUser = (data: UserDef): object => {
    const userExists = checkUserExists(data);

    if (userExists) {
        return { ...userExists, password: "" };
    }
    throw new Error("Email and Password does not match");
};

export const createNewUser = (data: UserInfoDef): object => {
    const userExists = checkUserExists({
        email: data.email,
        password: data.password,
    });

    if (userExists) {
        return { ...userExists, password: "" };
    } else {
        return Error("Email already exists");
    }
};
