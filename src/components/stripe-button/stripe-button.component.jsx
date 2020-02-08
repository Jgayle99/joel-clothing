import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_RthDwELXP7YVZ8Miwig6HRyT00PszZw2ST';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'Joel Clothing Shop'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your Total $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />

    );
};

export default StripeCheckoutButton;