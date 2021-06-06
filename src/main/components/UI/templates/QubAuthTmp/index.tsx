import * as React from "react";
import style from "./index.module.css";

interface QubAuthTmpDef {
    body: JSX.Element;
    bodyTitle: string;
}

export const QubAuthTmp = (props: QubAuthTmpDef) => {
    return (
        <div className={style.qtmp}>
            <div className={style.qtmpHead}>
                <h2 className={style.qtmpTitle}>Welcome to qub dashbord</h2>
            </div>

            <div className={style.qtmpBody}>
                <h1 className={style.qtmpBodyTitle}>{props.bodyTitle}</h1>
                <div className={style.qtmpBodyCont}>{props.body}</div>
            </div>
        </div>
    );
};
