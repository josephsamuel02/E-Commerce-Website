import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogIn } from "../store/actions/User";

const Login = () => {
    // const USER = useSelector((state) => state.LogIn);
    const dispatch = useDispatch();

    const [user, setUser] = useState();
    const [password, setPassword] = useState();

    // const redirect = () => {
    //     window.location.href = '/anotherPagePath'
    //  }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let userInfo = {
            user,
            password,
        };

        dispatch(LogIn(userInfo));
    };
    return (
        <div>
            <br /> <br /> <br />
            <form>
                <input
                    type="text"
                    placeholder="e-mail or phone"
                    onChange={(e) => setUser(e.target.value)}
                />
                <br /> <br />
                <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br /> <br />
                <button type="submit" onClick={handleSubmit}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
