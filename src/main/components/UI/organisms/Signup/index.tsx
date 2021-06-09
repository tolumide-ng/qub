import * as React from "react";
import { Link } from "react-router-dom";
import { AuthInputDef, StateType } from "../../../../commonTypes";
import { InputForm } from "../../atoms/AppInput";
import { Button } from "../../atoms/Button";
import style from "./index.module.css";

interface SignupDef {
    options: Array<AuthInputDef>;
    handleSubmit: (e: React.FormEvent) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    user: {
        [key: string]: string;
    };
    error: string | null;
    loadStatus: StateType;
}

export const Signup = (props: SignupDef) => {
    return (
        <article className={style.signup}>
            <form onSubmit={props.handleSubmit} className={style.signupForm}>
                {props.options.map((option) => (
                    <InputForm
                        inputType={option.type}
                        inputRequired={option?.required ?? false}
                        inputClassName={`appInput ${style.signupInput}`}
                        inputPlaceholder=""
                        inputContClass={""}
                        inputName={option.name}
                        inputValue={props.user[option.name]}
                        onChange={props.handleChange}
                        inputLabelName={option.label}
                        inputLabelClass={style.signupLabel}
                        key={option.label}
                    />
                ))}

                <small className="appError">{props.error}</small>

                <div className={style.signupActions}>
                    <Link to="/" className={`appButton ${style.signupLogin}`}>
                        Login
                    </Link>

                    <Button
                        buttonText="Sign up"
                        buttonClass={`appButton ${style.signupSubmit}`}
                        buttonType="submit"
                        buttonDisabled={props.loadStatus === "loading"}
                    />
                </div>
            </form>
        </article>
    );
};
