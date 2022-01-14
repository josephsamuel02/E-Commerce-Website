import axios from "axios";

const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWE0Njk5MTFiNzgwNzc3NjY4OWQ0NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTkxMjc3OCwiZXhwIjoxNjQyMTcxOTc4fQ.yas9WdkZNF00r_glMxrBrUoPszy7VkSeLmIsa62Vtcw";
// const userId = "9ny48xxj4";

// GET CART SUMTOTAL

const login = async (user) => {
    try {
        const response = await axios.get(
            `http://localhost:8000/auth/login`,
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

//DELETE CART ITEM

// const deletecart = async (id) => {
//     try {
//         const response = await axios.delete(
//             `http://localhost:8000/cart/${id}`,
//             {
//                 headers: {
//                     token: token,
//                 },
//             }
//         );

//         return { status: "Item has been delete successfuly" };
//     } catch (err) {
//         throw err;
//     }
// };

// export const DeleteCart = (id) => ({
//     type: "DELETE_CART",
//     payload: deletecart(id),
// });
