import * as React from "react";
import { Signup } from "../../UI/organisms/Signup";
import { QubAuthTmp } from "../../UI/templates/QubAuthTmp";
import styles from "./index.module.css";

const options = [
    {
        label: "First name",
        name: "firstName",
        type: "text",
    },
    {
        label: "Last name",
        name: "lastName",
        type: "text",
    },
    {
        label: "Email address",
        name: "email",
        type: "email",
    },
    { label: "Password", name: "password", type: "password" },
];

export const SignupPage = () => {
    const [user, setUser] = React.useState<{ [key: string]: string }>({
        firstName: "",
        lastName: "",
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
        <article className={styles.sPage}>
            <QubAuthTmp
                body={
                    <Signup
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        options={options}
                        user={user}
                    />
                }
                bodyTitle="Create your Account"
            />
        </article>
    );
};
