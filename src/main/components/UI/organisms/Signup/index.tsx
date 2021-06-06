import * as React from "react";
import { Link } from "react-router-dom";
import { AuthInputDef } from "../../../../commonTypes";
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
}

export const Signup = (props: SignupDef) => {
    return (
        <article className={style.signup}>
            <form onSubmit={props.handleSubmit} className={style.signupForm}>
                {props.options.map((option) => (
                    <InputForm
                        inputType={option.type}
                        inputRequired={true}
                        inputClassName={`appInput ${style.signupInput}`}
                        inputPlaceholder=""
                        inputContClass={""}
                        inputName={option.name}
                        inputValue={props.user[option.name]}
                        onChange={props.handleChange}
                        inputLabelName={option.label}
                        inputLabelClass={style.signupLabel}
                    />
                ))}

                <div className={style.signupActions}>
                    <Link
                        to="/login"
                        className={`appButton ${style.signupLogin}`}
                    >
                        Login
                    </Link>

                    <Button
                        buttonText="Sign up"
                        buttonClass={`appButton ${style.signupSubmit}`}
                        buttonType="submit"
                    />
                </div>
            </form>
        </article>
    );
};
