import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let inf = {
            user,
            password,
        };
        if (typeof user === "string") {
            console.log(inf);
        }
    };
    return (
        <div>
            <br /> <br /> <br />
            <form onSubmit={handleSubmit}>
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
                <br /> <br /> <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
