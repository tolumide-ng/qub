import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchAuthAction } from "../../../store/modules/auth/actions";
import { RootState } from "../../../store/modules/types";
import { Login } from "../../UI/organisms/Login";
import { QubAuthTmp } from "../../UI/templates/QubAuthTmp";
import style from "./index.module.css";

const options = [
    {
        label: "Email",
        name: "email",
        type: "email",
    },
    {
        label: "Password",
        name: "password",
        type: "password",
    },
];

export const LoginPage = () => {
    const [user, setUser] = React.useState<{ [key: string]: string }>({
        email: "",
        password: "",
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
        // make submission request here
        dispatch(
            fetchAuthAction({ path: "login", method: "GET", payload: user })
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
        <article className={style.lPage}>
            {
                <QubAuthTmp
                    body={
                        <Login
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            user={user}
                            options={options}
                            error={authError}
                            loadStatus={selector.status}
                        />
                    }
                    bodyTitle="Login to your account"
                />
            }
        </article>
    );
};
