import * as React from "react";
import { Link } from "react-router-dom";
import { AuthInputDef, StateType } from "../../../../commonTypes";
import InputForm from "../../atoms/AppInput";
import { Button } from "../../atoms/Button";
import style from "./index.module.css";

interface LoginDef {
    options: Array<AuthInputDef>;
    handleSubmit: (e: React.FormEvent) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    user: {
        [key: string]: string;
    };
    loadStatus: StateType;
    error: string | null;
}

export const Login = (props: LoginDef) => {
    return (
        <article className={style.login}>
            <form onSubmit={props.handleSubmit} className={style.loginForm}>
                {props.options.map((option) => (
                    <InputForm
                        inputType={option.type}
                        inputRequired={true}
                        inputClassName={`appInput ${style.loginInput}`}
                        inputPlaceholder=""
                        inputContClass={style.loginCont}
                        inputName={option.name}
                        inputValue={props.user[option.name]}
                        onChange={props.handleChange}
                        inputLabelName={option.label}
                        inputLabelClass={style.loginLabel}
                    />
                ))}

                <small className="appError">{props.error}</small>

                <div className={`${style.loginCont} ${style.loginActions}`}>
                    <Link
                        to="/signup"
                        className={`appButton ${style.loginSignup}`}
                    >
                        Sign up
                    </Link>
                    <Button
                        buttonText="Log in"
                        buttonClass={`appButton ${style.loginSubmit}`}
                        buttonType="submit"
                        buttonDisabled={props.loadStatus === "loading"}
                    />
                </div>
            </form>
        </article>
    );
};
