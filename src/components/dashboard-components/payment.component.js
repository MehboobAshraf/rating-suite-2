import React,{useEffect} from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from './checkout-form.component';
import axios from 'axios';

const PaymentComponent = () => {

  useEffect(()=>{
    getPaymentHistory()
  },[])
  const getPaymentHistory = async() =>{
    try{
      const res = await axios.get('https://my-test-stripe-server.herokuapp.com/stripe')
      console.log('response', res )
    }catch(e){
      console.log('testing ',e.response.data)
    }
  }
  const PUBLIC_KEY = 'pk_test_51Hx7HsKdUGp8fWpueaK23s8WR2MpgKnk2RtVoNaYdpZRmQGmXeaN26MhVnLNguyiSPKtrougJbGpxXharrbMYVzF00ydGwDOSh';

  const stripeTestPromise = loadStripe(PUBLIC_KEY);
  console.log('stripeTestPromise', stripeTestPromise);

  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentComponent;
