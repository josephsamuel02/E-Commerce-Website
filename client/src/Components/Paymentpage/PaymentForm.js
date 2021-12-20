import { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "green",
            color: "dodgerblue",
            fontWeight: 500,
            fontFamily: "Roboto,Open Sans,Segoe Ui, sans-serif ",
            fontSize: "16px",
            fontSmoothing: "antialiased",
        },

        invalid: {
            iconColor: "orange",
            color: "red",
        },
    },
};

const PaymentForm = () => {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();

    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (!error) {
            try {
                const { id } = paymentMethod;
                const response = await axios.post(
                    "http://localhost:8000/stripe/payment",
                    {
                        tokenId: id,
                        amount: 1000,
                    }
                );

                if (response.data.success) {
                    setSuccess(true);
                    console.log("payment is successful");
                } else {
                    console.log("payment is un-successful");
                }
            } catch (err) {
                console.log("an Error Occurd", err);
            }
        } else {
            console.log(error.message);
        }
    };
    const [total, settotal] = useState("$274");

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>Net Total {total}</p>
                <fieldset>
                    <div>
                        <CardElement options={CARD_OPTIONS} />
                    </div>
                </fieldset>

                <button type="submit">Place Order</button>
            </form>
        </>
    );
};

export default PaymentForm;
