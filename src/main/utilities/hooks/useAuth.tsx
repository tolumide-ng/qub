import * as React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { RootState } from "../../store/modules/types";

interface UseAuthDef {
    setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export const useAuth = (props: UseAuthDef) => {
    const selector = useSelector((state: RootState) => state.authReducer);
    const history = useHistory();

    React.useEffect(() => {
        if (selector.status === "failure" && selector.authError) {
            props.setError(selector.authError);
        }

        if (selector.status === "success") {
            if (selector.user.role === "user") {
                history.push("/brands");
            }

            if (selector.user.role === "admin") {
                history.push("/brand/users");
            }
        }
    }, [selector.status]);

    return {
        selector,
    };
};
