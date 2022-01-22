export const SendOrder = (state = [], action) => {
    switch (action.type) {
        case "SEND_ORDER":
            return action.payload;

        default:
            return state;
    }
};
