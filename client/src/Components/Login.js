const Login = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Yeah");
    };
    return (
        <div>
            <br /> <br /> <br />
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="e-mail or phone" />
                <br /> <br /> <input type="text" placeholder="password" />
                <br /> <br /> <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
