import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Spinner } from 'reactstrap';
import { Row, Card, Col, message } from 'antd';
import PaymentService from '../../services/payment.service';

export const CheckoutForm = () => {
  const [isloading, setIsLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });
    if (!error) {
      try {
        const { id } = paymentMethod;
        const amount = 100*100
        const response = await PaymentService.createPayment(amount, id);
        setIsLoading(false)
        if (response.data.success) {
          message.success('Payment Successfull');
        }
      } catch (error) {
        message.error('Payment Failed');
        setIsLoading(false)
      }
    } else {
      console.log(error.message);
      message.error('Payment Failed');
      setIsLoading(false)
    }
  };
  const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: '#c4f0ff',
        color: 'black',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': { color: '#fce883' },
        '::placeholder': { color: '#87bbfd' },
        border: '1px solid #eee'
      },
      invalid: {
        iconColor: '#ffc7ee',
        color: '#ffc7ee'
      }
    }
  };
  return (
    <Row>
      <Col lg={24} sm={24}>
        <Card >
          <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
            <CardElement options={CARD_OPTIONS} />
            <button type="submit" className="btn btn-custom btn-dashboard float-left mt-3">
            {isloading ? <Spinner size="sm" type="grow" color="light" className="mr-2" /> : ''}
              Pay
            </button>
          </form>
        </Card>
      </Col>
    </Row>
  );
};
