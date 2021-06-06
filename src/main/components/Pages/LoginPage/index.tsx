import * as React from "react";
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();

        e.preventDefault();

        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // make submission request here
    };

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
                        />
                    }
                    bodyTitle="Login to your account"
                />
            }
        </article>
    );
};
