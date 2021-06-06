import * as React from "react";
import { Button } from "../../atoms/Button";
import { LoadImg } from "../../atoms/LoadImg";
import style from "./index.module.css";

export const BrandCard = () => {
    return (
        <div className={style.brand}>
            <div className={style.brandTop}>
                <LoadImg
                    loadImg=""
                    loadAlt="image showing the brand"
                    loadClass={style.brandAvi}
                />
            </div>

            <div className={style.brandBottom}>
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
    );
};
