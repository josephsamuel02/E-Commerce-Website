const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("register");
    };
    return (
        <div>
            <br />
            <form onSubmit={handleSubmit}>
                <br /> <br /> <input type="text" placeholder="Name" />
                <br /> <br /> <input type="text" placeholder="email" />
                <br /> <br /> <input type="text" placeholder="Phone" />
                <br /> <br /> <input type="text" placeholder="password" />
                <br /> <br />
                <input type="text" placeholder="confirm password" />
                <br /> <br /> <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
