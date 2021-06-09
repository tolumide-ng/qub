import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SpecificBrandDef } from "../../../commonTypes";
import { fetchBrandsAction } from "../../../store/modules/brands/actions";
import { RootState } from "../../../store/modules/types";
import { BrandCard } from "../../UI/organisms/BrandCard";
import style from "./index.module.css";

export const AllBrands = () => {
    const [brands, setBrands] = React.useState<Array<SpecificBrandDef>>([]);

    const selector = useSelector((state: RootState) => state.brandsReducer);
    const authSelector = useSelector((state: RootState) => state.authReducer);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (selector.status === "rest") {
            dispatch(
                fetchBrandsAction({
                    path: "brands",
                    method: "GET",
                    payload: {},
                })
            );
        }

        if (selector.status === "success") {
            console.log("SUCCESSSS?????????", selector.brands);
            setBrands(selector.brands);
        }
    }, [selector.status]);

    return (
        <article className={style.allB}>
            <div className={style.allBTop}>
                <h1 className={style.allBTitle}>Qub Brands</h1>
            </div>
            <div className={style.allBBody}>
                {brands?.map((brand) => (
                    <BrandCard
                        key={brand.index}
                        brandName={brand.brandName}
                        followers={brand.followers}
                        balance={brand.balance}
                        index={brand.index}
                        following={brand.followers.includes(
                            authSelector.user.email
                        )}
                    />
                ))}
            </div>
        </article>
    );
};
