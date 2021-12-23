import axios from "axios";

const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWE0Njk5MTFiNzgwNzc3NjY4OWQ0NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDE2MzE1NiwiZXhwIjoxNjQwNDIyMzU2fQ.3emsZoBlcX7zGIzK00nkfmrGHPujuy6ZG541gOLwQvw";
// const userId = "9ny48xxj4";

// ADD PRODUCTS TO CART
const addtocart = async (product) => {
    try {
        const response = await axios.post(
            "http://localhost:8000/cart",
            product,

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

const cartitems = async (userId) => {
    try {
        const response = await axios.get(
            `http://localhost:8000/cart/${userId}`
        );
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const GetCart = (userId) => ({
    type: "GET_CART",
    payload: cartitems(userId),
});

// UPDATE CART PRODUCT

const updatecart = async (product, productId) => {
    try {
        const response = await axios.put(
            `http://localhost:8000/cart/${productId}`,
            {
                quantity: product,
            },
            {
                headers: {
                    token: token,
                },
            }
        );

        return response.data;
    } catch (err) {
        throw err;
    }
};

export const UpdateCart = (product, productId) => ({
    type: "UPDATE_CART",
    payload: updatecart(product, productId),
});
