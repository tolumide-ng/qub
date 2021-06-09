import { ThunkDispatch } from "redux-thunk";
import { Subject, from, connectable } from "rxjs";
import { multicast } from "rxjs/operators";
import { SpecificBrandDef } from "../main/commonTypes";
import { fetchBrandsUpdate } from "../main/store/modules/brands/actions";
import { allUsers } from "./allUsers";

const letters = "abcdefghijklmnopqrstuvwxwz";

export const generateBrands = (): Array<SpecificBrandDef> => {
    const allBrands: Array<SpecificBrandDef> = [];

    let combined = "";

    for (let i = 0; i < letters.length; i++) {
        combined += letters[i];

        if (combined.length === 3 || i == letters.length - 1) {
            allBrands.push({
                brandName: combined,
                balance: i * combined.length,
                followers:
                    i % 2 === 0
                        ? allUsers.slice(1, 4).map((user) => user.email)
                        : [],
                index: i,
            });
            combined = "";
        }
    }

    return allBrands;
};

const source = from(generateBrands());
const subject = new Subject();
const multicasted = source.pipe(multicast(subject));

const initateBrandSubscribe = (dispatch: any) => {
    multicasted.subscribe({
        next: (newBrands) =>
            dispatch(fetchBrandsUpdate(newBrands as Array<SpecificBrandDef>)),
    });
};
