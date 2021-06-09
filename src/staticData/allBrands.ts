import { SpecificBrandDef } from "../main/commonTypes";
import { allUsers } from "./allUsers";

const letters = "abcdefghijklmnopqrstuvwxwz";

export const generateBrands = ((): Array<SpecificBrandDef> => {
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
})();
