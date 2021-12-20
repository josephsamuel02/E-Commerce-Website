// import { useState } from "react";
import StripContainer from "./StripeContainer";

// import axios from "axios";

const Pay = () => {
    // const [total, settotal] = useState("$200");

    return (
        <div>
            <div>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                </ul>
                {/* 
                <h3>Total {total}</h3> */}
            </div>
            <br /> <br />
            <StripContainer />
        </div>
    );
};

export default Pay;
