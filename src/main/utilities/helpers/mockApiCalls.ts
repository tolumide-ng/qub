import { allUsers } from "../../../staticData/allUsers";
import { UserDef, UserInfoDef } from "../../commonTypes";

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
