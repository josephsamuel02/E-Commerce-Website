import axios from "axios";
// ADD PRODUCTS TO CART
const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWE0Njk5MTFiNzgwNzc3NjY4OWQ0NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDA3NjY3NywiZXhwIjoxNjQwMzM1ODc3fQ.L0bKe7ixrwDsSbXUVeI6sP2ewcHpymytmodNK9-nLME";

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

// GET ALL CART PRODUCTS

const cartitems = async () => {
    try {
        const response = await axios.get(
            `http://localhost:8000/cart/${userId}`
        );
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const GetCart = () => ({
    type: "GET_CART",
    payload: cartitems(),
});

const addQuantity = (q) => {
    const b = q + 1;
    return b;
};

export const CartQuantity = (q) => ({
    type: "CART_QUANTITY",
    payload: addQuantity(q),
});
