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
        followers: [{ email: allUsers[2].email, redeemed: false, points: 300 }],
    },
    {
        brandName: "def",
        balance: 300,
        index: 1,
        followers: [
            { email: allUsers[2].email, redeemed: false, points: 300 },
            { email: allUsers[3].email, redeemed: false, points: 300 },
            { email: allUsers[4].email, redeemed: false, points: 300 },
        ],
    },
    {
        brandName: "ghi",
        balance: 300,
        index: 2,
        followers: [
            { email: allUsers[2].email, redeemed: false, points: 300 },
            { email: allUsers[3].email, redeemed: false, points: 300 },
            { email: allUsers[4].email, redeemed: false, points: 300 },
        ],
    },
    {
        brandName: "jkl",
        balance: 300,
        index: 3,
        followers: [{ email: allUsers[2].email, redeemed: false, points: 300 }],
    },
    {
        brandName: "mno",
        balance: 300,
        index: 4,
        followers: [
            { email: allUsers[2].email, redeemed: false, points: 300 },
            { email: allUsers[3].email, redeemed: false, points: 300 },
            { email: allUsers[4].email, redeemed: false, points: 300 },
        ],
    },
    {
        brandName: "pqr",
        balance: 300,
        index: 5,
        followers: [],
    },
    {
        brandName: "stu",
        balance: 300,
        index: 6,
        followers: [
            { email: allUsers[2].email, redeemed: false, points: 300 },
            { email: allUsers[3].email, redeemed: false, points: 300 },
            { email: allUsers[4].email, redeemed: false, points: 300 },
        ],
    },
    {
        brandName: "vwx",
        balance: 300,
        index: 7,
        followers: [{ email: allUsers[2].email, redeemed: false, points: 300 }],
    },
    {
        brandName: "abc",
        balance: 300,
        index: 8,
        followers: [{ email: allUsers[2].email, redeemed: false, points: 300 }],
    },
    {
        brandName: "yz",
        balance: 300,
        index: 9,
        followers: [
            { email: allUsers[2].email, redeemed: false, points: 300 },
            { email: allUsers[3].email, redeemed: false, points: 300 },
            { email: allUsers[4].email, redeemed: false, points: 300 },
        ],
    },
];
