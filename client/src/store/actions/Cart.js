import axios from "axios";

const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWE0Njk5MTFiNzgwNzc3NjY4OWQ0NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTc3MzMxMCwiZXhwIjoxNjQwMDMyNTEwfQ.uL4u8F4W1Py8vndjsOsF3CcEbiTo9ypOpx-Tlj1um9U";

const userId = "9ny48xxj4";
const addtocart = async (product) => {
    try {
        const response = await axios.post(
            "http://localhost:8000/cart",
            {
                userId: userId,
                product: product,
            },
            {
                headers: {
                    token: token,
                },
            }
        );

        return {
            response: response.data,
            // totalPrice: response.data.price,
        };
    } catch (err) {
        throw err;
    }
};

export const AddToCart = (product) => ({
    type: "ADD_TO_CART",
    payload: addtocart(product),
});

// export const GetCart = () => ({
//     type: "GET_CART",
//     payload: getcart(),
// });

const addQuantity = (q) => {
    const b = q + 1;
    return b;
};

export const CartQuantity = (q) => ({
    type: "CART_QUANTITY",
    payload: addQuantity(q),
});
