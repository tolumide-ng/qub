import * as React from "react";
import "./index.css";

interface InputProps {
    inputType: string;
    inputRequired: boolean;
    inputClassName: string;
    inputPlaceholder: string;
    inputContClass: string;
    inputName: string;
    inputValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputErrorLabel?: string;
    inputDisplayError?: boolean;
    inputLabelName?: string;
    inputLabelClass?: string;
    inputErrorClass?: string;
}

export const InputForm = (props: InputProps) => {
    return (
        <>
            <div className={`input-form__container ${props.inputContClass}`}>
                {props?.inputLabelName && (
                    <label
                        className={props.inputLabelClass}
                        htmlFor={props.inputName}
                    >
                        {props.inputLabelName}
                    </label>
                )}
                <input
                    type={props.inputType}
                    className={`input-form__input ${props.inputClassName}`}
                    placeholder={props.inputPlaceholder}
                    name={props.inputName}
                    required={props.inputRequired}
                    value={props.inputValue}
                    onChange={props.onChange}
                />
                {props.inputDisplayError && (
                    <p
                        className={
                            props?.inputErrorClass
                                ? props.inputErrorClass
                                : "input-error"
                        }
                    >
                        {props.inputErrorLabel}
                    </p>
                )}
            </div>
        </>
    );
};

export default InputForm;
