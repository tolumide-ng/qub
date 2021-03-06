import * as React from "react";
import style from "./index.module.css";
import { QubAuthTmp } from "../../UI/templates/QubAuthTmp";
import { SpecificBrand } from "../../UI/organisms/SpecificBrand";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/modules/types";
import { useHistory, useParams } from "react-router";
import { fetchSpecificBrandAction } from "../../../store/modules/specificBrand/actions";
import { SpecificBrandDef } from "../../../commonTypes";

interface ParamsDef {
    id: string;
}

export const SpecificBrandPage = () => {
    const selector = useSelector(
        (state: RootState) => state.specificBrandReducer
    );
    const authSelector = useSelector((state: RootState) => state.authReducer);

    const dispatch = useDispatch();
    const [theBrand, setTheBrand] = React.useState<
        SpecificBrandDef | undefined
    >(undefined);

    const params: ParamsDef = useParams();
    const { id } = params;
    const theId = Number(id);

    React.useEffect(() => {
        if (
            !["success", "loading"].includes(selector.status) ||
            selector.brand.index !== theId
        ) {
            dispatch(
                fetchSpecificBrandAction({
                    method: "GET",
                    path: "brand",
                    payload: { id: theId },
                })
            );
        }

        if (selector.status === "success" && selector.brand.index === theId) {
            setTheBrand(selector.brand);
        }
    }, [theId, selector.status]);

    const handleRedeemPoints = (id: number) => {
        dispatch(
            fetchSpecificBrandAction({
                method: "PATCH",
                path: "brand",
                payload: { id: theId, email: authSelector.user.email },
            })
        );
    };

    return (
        <article className={style.spBrand}>
            {selector.status === "success" && theBrand ? (
                <QubAuthTmp
                    bodyTitle={`Brand Name: ${theBrand.brandName}`}
                    body={
                        <SpecificBrand
                            brandName={theBrand.brandName}
                            followers={theBrand.followers}
                            index={theBrand.index}
                            handleRedeemPoints={handleRedeemPoints}
                            disableButton={
                                theBrand.followers.find(
                                    (follow) =>
                                        follow.email === authSelector.user.email
                                )?.redeemed ?? false
                            }
                            balance={
                                theBrand.followers.find(
                                    (follow) =>
                                        follow.email === authSelector.user.email
                                )?.points ?? 0
                            }
                        />
                    }
                />
            ) : (
                <></>
            )}

            {selector.status === "failure" ? (
                <div className="">
                    <p>BRAND DOES NOT EXIST</p>
                </div>
            ) : (
                <></>
            )}

            {!["success", "failure"].includes(selector.status) ? (
                <div className="">
                    <p>LOADING</p>
                </div>
            ) : (
                <></>
            )}
        </article>
    );
};
