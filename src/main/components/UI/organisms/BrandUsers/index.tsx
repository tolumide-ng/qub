import * as React from "react";
import { Button } from "../../atoms/Button";
import { SpecificBrandDef } from "../../../../commonTypes";
import style from "./index.module.css";

interface BrandUsersDef extends SpecificBrandDef {}

export const BrandUsers = (props: BrandUsersDef) => {
    return (
        <table className={style.but}>
            <caption className={style.butCaption}>
                Table displaying brand users and their loyalty points
            </caption>
            <thead className={style.butHead}>
                <tr className={style.butRow}>
                    <th className={style.butCell}>S/N</th>
                    <th className={style.butCell}>Customer</th>
                    <th className={style.butCell}>Loyalty points</th>
                    <th className={style.butCell}>Actions</th>
                </tr>
            </thead>

            <tbody className={style.butBody}>
                <tr className={style.butRow}>
                    <td className={style.butCell}>1</td>
                    <td className={style.butCell}>firstName lastName</td>
                    <td className={style.butCell}>290 points</td>
                    <td className={style.butCell}>
                        <Button buttonClass="" buttonText="Award Points" />
                    </td>
                </tr>
                {props.followers.map((follow, index) => (
                    <tr className={style.butRow} key={follow.email}>
                        <td className={style.butCell}>{index}</td>
                        <td className={style.butCell}>firstName lastName</td>
                        <td className={style.butCell}>
                            {follow.points} points
                        </td>
                        <td className={style.butCell}>
                            <Button buttonClass="" buttonText="Award Points" />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
