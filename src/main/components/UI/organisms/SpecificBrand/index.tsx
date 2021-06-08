import * as React from "react";
import { Button } from "../../atoms/Button";
import { LoadImg } from "../../atoms/LoadImg";
import placeholder from "./../../../../assets/images/placeholder.svg";
import style from "./index.module.css";

export const SpecificBrand = () => {
    return (
        <div className="">
            <div className={style.specbTop}>
                <LoadImg
                    loadAlt="image of the brand"
                    loadClass={style.specbImage}
                    loadImg={placeholder}
                />
            </div>

            <div className={style.specbBottom}>
                <div className={style.specbBox}>
                    <p className={style.specbKey}>Your Total Points:</p>
                    <p className={style.specbValue}>489 Points</p>
                </div>
                <div className={style.specbBox}>
                    <p className={style.specbKey}>Redeem points</p>
                    <Button
                        buttonClass={`appButton ${style.specbButton}`}
                        buttonText="Redeem Points"
                        buttonType="button"
                    />
                </div>
            </div>
        </div>
    );
};
