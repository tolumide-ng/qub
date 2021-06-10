import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SpecificBrandDef } from "../../../commonTypes";
import { fetchSpecificBrandAction } from "../../../store/modules/specificBrand/actions";
import { RootState } from "../../../store/modules/types";
import { BrandUsers } from "../../UI/organisms/BrandUsers";
import style from "./index.module.css";

export const BrandUsersPage = () => {
    const brandSelector = useSelector(
        (state: RootState) => state.specificBrandReducer
    );

    const authSelector = useSelector((state: RootState) => state.authReducer);

    const dispatch = useDispatch();
    const [theBrand, setTheBrand] = React.useState<
        undefined | SpecificBrandDef
    >(undefined);

    React.useEffect(() => {
        if (!["success", "loading"].includes(brandSelector.status)) {
            dispatch(
                fetchSpecificBrandAction({
                    method: "GET",
                    path: "brand",
                    payload: {
                        id: authSelector.user.brand,
                    },
                })
            );
        }

        if (brandSelector.status === "success") {
            setTheBrand(brandSelector.brand);
        }
    }, [brandSelector.status]);

    return (
        <article>
            {brandSelector.status === "success" &&
            theBrand ? (
                <BrandUsers {...theBrand} />
            ) : (
                <></>
            )}

            {brandSelector.status === "failure" ? (
                <div className="">
                    <p>BRAND DOES NOT EXIST</p>
                </div>
            ) : (
                <></>
            )}

            {!["success", "failure"].includes(brandSelector.status) ? (
                <div className="">
                    <p>LOADING</p>
                </div>
            ) : (
                <></>
            )}
        </article>
    );
};
