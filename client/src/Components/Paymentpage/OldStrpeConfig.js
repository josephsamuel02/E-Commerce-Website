import { useEffect, useState } from "react";
import StripeCheckOut from "react-stripe-checkout";
import axios from "axios";

const stripePubKey =
    "pk_test_51K450RDsn6OvVCpwIafWfSSsyzs2PSDU889BE4NYzcA09fqR9aMSBZYE0rqRSIZhDjc3SvG63WeUlk7JBjbYAa4A006Bgancni";

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);

    useEffect(() => {
        const makerequest = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:8000/stripe/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                );

                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        stripeToken && makerequest();
    }, [stripeToken]);

    const onToken = (token) => {
        setStripeToken(token);
    };

    return (
        <div>
            <StripeCheckOut
                name="Nova"
                image="http://avatars.githubusercontent.com/u/1486366?v=4"
                billingAddress
                shippingAddress
                description="your total is $20"
                amount={2000}
                token={onToken}
                stripeKey={stripePubKey}
            >
                <button>Pay</button>
            </StripeCheckOut>
        </div>
    );
};

export default Pay;
