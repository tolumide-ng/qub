import * as React from "react";
import { Button } from "../../atoms/Button";
import { LoadImg } from "../../atoms/LoadImg";
import style from "./index.module.css";
import placeholder from "../../../../assets/images/placeholder.svg";

export const BrandCard = () => {
    return (
        <div className={style.brand}>
            <div className={style.brandTop}>
                <LoadImg
                    loadImg={placeholder}
                    loadAlt="image showing the brand"
                    loadClass={style.brandAvi}
                />
            </div>

            <div className={style.brandBottom}>
                <p className={style.brandName}>Alan and Breed</p>
                <div className={style.brandActions}>
                    <div className={style.brandLeft}>
                        <p className={style.brandTitle}>Brand Balance</p>
                        <p className={style.brandValue}>$200</p>
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
