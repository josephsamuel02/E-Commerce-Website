import axios from "axios";

// GET CART SUMTOTAL

export const tkn = `Bearer ${
    JSON.parse(JSON.parse(localStorage.getItem("persist:root")).LogIn)
        .accesstoken
}`;

export const userId = `Bearer ${
    JSON.parse(JSON.parse(localStorage.getItem("persist:root")).LogIn)._id
}`;

const login = async (user) => {
    try {
        const response = await axios.post(
            "http://localhost:8000/auth/login",
            user
        );

        return response.data;
    } catch (err) {
        throw err;
    }
};

export const LogIn = (user) => ({
    type: "GET_USER",
    payload: login(user),
});
