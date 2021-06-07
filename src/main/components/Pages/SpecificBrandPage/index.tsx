import * as React from "react";
import style from "./index.module.css";
import { QubAuthTmp } from "../../UI/templates/QubAuthTmp";
import { SpecificBrand } from "../../UI/organisms/SpecificBrand";

export const SpecificBrandPage = () => {
    return (
        <article className={style.spBrand}>
            <QubAuthTmp
                bodyTitle="Name of the brand"
                body={<SpecificBrand />}
            />
        </article>
    );
};
