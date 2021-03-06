import * as React from "react";
import { Link } from "react-router-dom";
import { SpecificBrandDef } from "../../../../commonTypes";
import { Button } from "../../atoms/Button";
import { LoadImg } from "../../atoms/LoadImg";
import placeholder from "./../../../../assets/images/placeholder.svg";
import style from "./index.module.css";

interface SpecificBrandComponentDef extends SpecificBrandDef {
    handleRedeemPoints: (id: number) => void;
    disableButton: boolean;
}

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
                        buttonText="Redeem 75%"
                        buttonType="button"
                        handleClick={() =>
                            props.handleRedeemPoints(props.index)
                        }
                        buttonDisabled={props.disableButton}
                    />
                </div>
            </div>
            <Link to="/brands" className={style.specBack}>
                Go Back
            </Link>
        </div>
    );
};
