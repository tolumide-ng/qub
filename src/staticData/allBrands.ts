import { ThunkDispatch } from "redux-thunk";
import { Subject, from, connectable } from "rxjs";
import { multicast } from "rxjs/operators";
import { SpecificBrandDef } from "../main/commonTypes";
import { allUsers } from "./allUsers";

export const allBrands: Array<SpecificBrandDef> = [
    {
        brandName: "abc",
        balance: 300,
        index: 0,
        followers: [allUsers[2].email],
    },
    {
        brandName: "abc",
        balance: 300,
        index: 1,
        followers: [allUsers[2].email, allUsers[3].email, allUsers[4].email],
    },
    {
        brandName: "abc",
        balance: 300,
        index: 2,
        followers: [allUsers[2].email, allUsers[3].email, allUsers[4].email],
    },
    {
        brandName: "abc",
        balance: 300,
        index: 3,
        followers: [allUsers[2].email],
    },
    {
        brandName: "abc",
        balance: 300,
        index: 4,
        followers: [allUsers[2].email, allUsers[3].email, allUsers[4].email],
    },
    {
        brandName: "abc",
        balance: 300,
        index: 5,
        followers: [allUsers[2].email],
    },
    {
        brandName: "abc",
        balance: 300,
        index: 6,
        followers: [allUsers[2].email, allUsers[3].email, allUsers[4].email],
    },
    {
        brandName: "abc",
        balance: 300,
        index: 7,
        followers: [allUsers[2].email],
    },
    {
        brandName: "abc",
        balance: 300,
        index: 8,
        followers: [allUsers[2].email],
    },
    {
        brandName: "abc",
        balance: 300,
        index: 9,
        followers: [allUsers[2].email, allUsers[5].email, allUsers[4].email],
    },
];
