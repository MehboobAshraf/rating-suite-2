import React from 'react';
import FAQAccordianComponent from './faq-accordian.component';

const FAQComponent = (props) => {
  return (
    <section className="section bg-light" id="faq">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-12">
            <h3 className="title">
              <span className="font-weight-bold">FAQ</span>
            </h3>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-8">
            <div className="pl-4 pr-4 text-left">
              <FAQAccordianComponent
                question="How do I get support from ratingsuite?"
                answer={`${'Please reach out to us at support@ratingsuite.com for account specific queries. We will try to respond within 1 business day. We provide SLA backed support and dedicated manager for "Enterprise" tier customers, please reach out to us at contact@ratingsuite.com'}`}
              />
              <FAQAccordianComponent
                question="How is ratingsuite better than competitor?"
                answer={`${'We are extremely focussed on providing the best user experience to our customers. Our platform is fully automated and is built from the ground up using modern technologies. Customers will experience near zero latency and intuitive user experience unlike what our competitors offer. We use cutting edge Machine Learning and Natural Language Processing to provide meaningful and accurate analysis of each product.'}`}
              />
              <FAQAccordianComponent
                question="Is there a free trial?"
                answer="Yes, we provide a 14-day free trial on pre loaded products and reviews to new customers."
              />
              <FAQAccordianComponent
                question="Can I see a live demo?"
                answer="Yes, we would be happy to arrange a free demo for you. Please contact us to schedule a demo."
              />
              <FAQAccordianComponent
                question="Can I get a custom package based on my need?"
                answer={`${'Yes, we offer additional services to our customers in "Enterprise" tier including custom reports, support for additional sites.'}`}
              />
              <FAQAccordianComponent
                question="What countries do you support?"
                answer="We currently support USA. But we will be adding more countries in the future. Stay tuned!"
              />
              <FAQAccordianComponent
                question="Is the payment secure?"
                answer="Yes. We use Stripe for payment processing in our platform. Stripe is a popular payment processing service used by many renowmed internet businesses."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQComponent;
