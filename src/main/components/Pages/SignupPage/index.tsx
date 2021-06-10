import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthAction } from "../../../store/modules/auth/actions";
import { RootState } from "../../../store/modules/types";
import { useAuth } from "../../../utilities/hooks/useAuth";
import { Signup } from "../../UI/organisms/Signup";
import { QubAuthTmp } from "../../UI/templates/QubAuthTmp";
import styles from "./index.module.css";

const options = [
    {
        label: "First name",
        name: "firstName",
        type: "text",
        required: true,
    },
    {
        label: "Last name",
        name: "lastName",
        type: "text",
        required: true,
    },
    {
        label: "Email address",
        name: "email",
        type: "email",
        required: true,
    },
    {
        label: "Password",
        name: "password",
        type: "password",
        required: true,
    },
    {
        label: "Brand Name",
        name: "brand",
        type: "text",
        required: true,
    },
    {
        label: "Max Points",
        name: "balance",
        type: "number",
        required: true,
    },
];

interface SignupPageDef {
    brands?: boolean;
}

export const SignupPage = (props: SignupPageDef) => {
    const [user, setUser] = React.useState<{ [key: string]: string | number }>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        brand: "",
        balance: 200,
    });

    const [authError, setAuthError] = React.useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        e.preventDefault();

        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setAuthError(null);
        const payload = { ...user };
        if (props.brands) {
            payload.role = "admin";
        }

        if (!props.brands) {
            payload.role = "user";
            delete payload.brand;
            delete payload.balance;
        }
        dispatch(
            fetchAuthAction({
                path: "signup",
                method: "GET",
                payload,
                params: {},
            })
        );
    };

    const dispatch = useDispatch();

    const { selector } = useAuth({ setError: setAuthError });

    return (
        <article className={styles.sPage}>
            <QubAuthTmp
                body={
                    <Signup
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        options={props?.brands ? options : options.slice(0, 4)}
                        user={user}
                        error={authError}
                        loadStatus={selector.status}
                    />
                }
                bodyTitle="Create your Account"
            />
        </article>
    );
};
