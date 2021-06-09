import * as React from "react";
import { Button } from "../../atoms/Button";
import { LoadImg } from "../../atoms/LoadImg";
import style from "./index.module.css";
import placeholder from "../../../../assets/images/placeholder.svg";
import { SpecificBrandDef } from "../../../../commonTypes";

interface BrandCardDef extends SpecificBrandDef {
    following: boolean;
}

export const BrandCard = (props: BrandCardDef) => {
    return (
        <div className={style.brand}>
            <div className={style.brandTop}>
                <LoadImg
                    loadImg={placeholder}
                    loadAlt={`image showing the logo of  ${props.brandName}`}
                    loadClass={style.brandAvi}
                />
            </div>

            <div className={style.brandBottom}>
                <p className={style.brandName}>{props.brandName}</p>
                <div className={style.brandActions}>
                    <div className={style.brandLeft}>
                        <p className={style.brandTitle}>Brand Balance</p>
                        <p className={style.brandValue}>${props.balance}</p>
                    </div>
                    <div className={style.brandRight}>
                        <Button
                            buttonText="follow"
                            buttonClass={`appButton ${style.brandButton}`}
                            buttonType="button"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
