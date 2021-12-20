export const AddToCart = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return action.payload;

        default:
            return state;
    }
};

export const GetCart = (state = [], action) => {
    switch (action.type) {
        case "GET_CART":
            return action.payload;

        default:
            return state;
    }
};

export const CartQuantity = (state = [], action) => {
    switch (action.type) {
        case "CART_QUANTITY":
            return action.payload;

        default:
            return state;
    }
};
