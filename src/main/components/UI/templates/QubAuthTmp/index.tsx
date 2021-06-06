import * as React from "react";
import style from "./index.module.css";

interface QubAuthTmpDef {
    body: JSX.Element;
}

export const QubAuthTmp = (props: QubAuthTmpDef) => {
    return (
        <div className="">
            <div className="">
                <p>Welcome to qub dashbord</p>
            </div>

            <div className="">{props.body}</div>
        </div>
    );
};
