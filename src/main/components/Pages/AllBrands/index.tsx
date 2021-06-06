import * as React from "react";
import { BrandCard } from "../../UI/organisms/BrandCard";
import style from "./index.module.css";

export const AllBrands = () => {
    return (
        <article className={style.allB}>
            <div className={style.allBTop}>
                <h1 className={style.allBTitle}>Qub Brands</h1>
            </div>
            <div className={style.allBBody}>
                {Array(20)
                    .fill("_")
                    .map((brand, index) => (
                        <BrandCard key={index} />
                    ))}
            </div>
        </article>
    );
};
