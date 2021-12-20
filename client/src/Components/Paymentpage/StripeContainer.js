import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import PaymentForm from "./PaymentForm";

const stripePubKey =
    "pk_test_51K450RDsn6OvVCpwIafWfSSsyzs2PSDU889BE4NYzcA09fqR9aMSBZYE0rqRSIZhDjc3SvG63WeUlk7JBjbYAa4A006Bgancni";

const striptestpromise = loadStripe(stripePubKey);

const StripContainer = () => {
    return (
        <Elements stripe={striptestpromise}>
            <PaymentForm />
        </Elements>
    );
};

export default StripContainer;
