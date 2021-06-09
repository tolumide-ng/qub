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
    const dispatch = useDispatch();
    const [theBrand, setTheBrand] = React.useState<SpecificBrandDef | {}>({});

    const params: ParamsDef = useParams();
    const { id } = params;
    const theId = Number(id);

    const history = useHistory();

    React.useEffect(() => {
        if (
            !["success"].includes(selector.status) ||
            selector.brand.index !== theId
        ) {
            dispatch(
                fetchSpecificBrandAction({
                    method: "GET",
                    path: "brand",
                    payload: { id },
                })
            );
        }

        if (selector.status === "success" && selector.brand.index === theId) {
            setTheBrand(selector.brand);
        }
    }, [theId, selector.status]);

    return (
        <article className={style.spBrand}>
            {JSON.stringify(params)}
            {selector.status !== "failure" ? (
                <QubAuthTmp
                    bodyTitle="Name of the brand"
                    body={<SpecificBrand />}
                />
            ) : (
                <div className="">
                    <p>BRAND DOES NOT EXIST</p>
                </div>
            )}
        </article>
    );
};
