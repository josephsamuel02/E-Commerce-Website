import axios from "axios";

const sendOrder = async (order) => {
    try {
        const response = await axios.post(
            "http://localhost:8000/order",
            order,
            {
                headers: {
                    token: `Bearer ${
                        JSON.parse(
                            JSON.parse(localStorage.getItem("persist:root"))
                                .LogIn
                        ).accesstoken
                    }`,
                },
            }
        );

        return response.data;
    } catch (err) {
        throw err;
    }
};

export const SendOrder = (order) => ({
    type: "SEND_ORDER",
    payload: sendOrder(order),
});
