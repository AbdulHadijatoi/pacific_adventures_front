import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Cookies from "js-cookie";

const stripePromise = loadStripe("pk_test_qblFNYngBkEdjEZ16jxxoWSM");

const StripePayment = ({ data, onNext, paymentData, activeStep, cartData }) => {
    const [cookieData, setCookieData] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0);
    const [sideData, setSideData] = useState(null);
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        const data = localStorage.getItem('bookingDetails');
        if (data) {
            setCookieData(JSON.parse(data));
            setTotalAmount(JSON.parse(data)?.total_amount || 0);
        }
    }, []);

    useEffect(() => {
        const data = Cookies.get('information');
        if (data) {
            setSideData(JSON.parse(data));
            setTotalValue(JSON.parse(data)?.total_amount || 0);
        }
    }, []);

    const handleCheckout = async () => {
        const stripe = await stripePromise;

        const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer sk_test_26PHem9AhJZvU623DfE1x4sd`
            },
            body: new URLSearchParams({
                "payment_method_types[]": "card",
                "line_items[0][price_data][currency]": "aed",
                "line_items[0][price_data][product_data][name]": "Total Amount",
                "line_items[0][price_data][unit_amount]": totalAmount * 100, // Amount in cents
                "line_items[0][quantity]": "1",
                "mode": "payment",
                "success_url": `${window.location.origin}/booking-info`,
                "cancel_url": `${window.location.origin}/payment-error`
            })
        });

        const session = await response.json();

        // Redirect to Stripe Checkout
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            console.error(result.error.message);
        }
    };

    return (
        <div>
            <h2>Total Amount: AED {totalAmount}</h2>
            <button onClick={handleCheckout}>Proceed to Payment</button>
        </div>
    );
};

export default StripePayment;
