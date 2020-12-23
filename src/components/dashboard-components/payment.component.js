import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from './checkout-form.component';
const PaymentComponent = () => {

  const PUBLIC_KEY = 'pk_test_ImcNHjX7Hg0zmDyFQMGzDrWH00qKWDRxXv';
  const stripeTestPromise = loadStripe(PUBLIC_KEY);

  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentComponent;
