import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchAuthAction } from "../../../store/modules/auth/actions";
import { RootState } from "../../../store/modules/types";
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
        type: "brand",
        required: true,
    },
];

interface SignupPageDef {
    brands?: boolean;
}

export const SignupPage = (props: SignupPageDef) => {
    const [user, setUser] = React.useState<{ [key: string]: string }>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        brand: "",
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
        dispatch(
            fetchAuthAction({
                path: "signup",
                method: "GET",
                payload: { ...user, role: props.brands ? "admin" : "user" },
            })
        );
    };

    const selector = useSelector((state: RootState) => state.authReducer);

    const dispatch = useDispatch();
    const history = useHistory();

    React.useEffect(() => {
        if (selector.status === "failure" && selector.authError) {
            setAuthError(selector.authError);
        }

        if (selector.status === "success") {
            history.push("/brands");
        }
    }, [selector.status]);

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
