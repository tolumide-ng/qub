import * as React from "react";
import { Link } from "react-router-dom";
import { SpecificBrandDef } from "../../../../commonTypes";
import { Button } from "../../atoms/Button";
import { LoadImg } from "../../atoms/LoadImg";
import placeholder from "./../../../../assets/images/placeholder.svg";
import style from "./index.module.css";

interface SpecificBrandComponentDef extends SpecificBrandDef {}

export const SpecificBrand = (props: SpecificBrandComponentDef) => {
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
                    <p className={style.specbValue}>{props.balance} Points</p>
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
            <Link to="/brands" className={style.specBack}>
                Go Back
            </Link>
        </div>
    );
};
