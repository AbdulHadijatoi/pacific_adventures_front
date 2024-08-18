import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./CheckoutForm";
import Cookies from "js-cookie";
import CheckoutGift from "./CheckoutGift";

const stripePromise = loadStripe("pk_test_qblFNYngBkEdjEZ16jxxoWSM");

const StripeGift = () => {



    // console.log(cookieData, 'jjj');

    return (
        <Elements stripe={stripePromise} options={'sk_test_26PHem9AhJZvU623DfE1x4sd'}>
            <CheckoutGift />
        </Elements>
    );
};

export default StripeGift;
// totalAmount = { cookieData?.total_amount } onNext = { onNext }