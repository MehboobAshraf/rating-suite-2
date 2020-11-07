import React from 'react';
import { Link } from 'react-router-dom';

const PricingComponent = (props) => {
  return (
    <section className="section " id="pricing">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-12">
            <h3 className="title">
              <span className="font-weight-bold">Pricing</span>
            </h3>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="bg-white price-box text-center mt-3">
              <div className="plan-price font-weight-bold">
                <h3 className="mb-0 font-weight-bold">Sandbox</h3>
                <div className="pricing-desc">
                  <p className="">
                    Try ratingsuite on pre-loaded product reviews
                  </p>
                </div>
                <div className="pricing-price mb-4">
                  <p>14 days free trial</p>
                </div>
              </div>
              <div className="mb-3">
                <Link to="/signup" className="btn btn-custom btn-round">
                  SignUp
                  {/* <a href="/signup"></a> */}
                </Link>
              </div>
              <br />
              <div className="plan-features text-muted mb-5 text-left ml-5">
                <p>
                  Reviews: <b className="text-custom">Limited</b>
                </p>
                <p>
                  Insights: <b className="text-custom">Yes</b>
                </p>
                <p>
                  Members: <b className="text-custom">1 Member</b>
                </p>
                <p>
                  Support: <b className="text-custom">Email</b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-white price-box active text-center mt-3">
              <div className="plan-price font-weight-bold">
                <h3 className="mb-0 font-weight-bold">Standard</h3>
                <div className="pricing-desc">
                  <p className="">For small businesses</p>
                </div>
                <div className="pricing-price mb-4">
                  <h4 className="mb-4 font-weight-bold">
                    $49 <span>/ mo</span>
                  </h4>
                  <h4 className="mb-0 font-weight-bold">
                    $499 <span>/ yr</span>
                  </h4>
                </div>
              </div>
              <div className="mb-3">
                <Link to="/signup" className="btn btn-custom btn-round">
                  SignUp
                  {/* <a href="/signup">SignUp</a> */}
                </Link>
              </div>
              <br />
              <div className="plan-features text-muted mb-5 text-left ml-5">
                <p>
                  Reviews: <b className="text-custom">Unlimited</b>
                </p>
                <p>
                  Insights: <b className="text-custom">Yes</b>
                </p>
                <p>
                  Members: <b className="text-custom">1 Member</b>
                </p>
                <p>
                  Support: <b className="text-custom">Email</b>
                </p>
                <p>
                  Custom Product Tracking: <b className="text-custom">Yes</b>
                </p>
                <p>
                  Alerts & Notifictions: <b className="text-custom">Yes</b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-white price-box text-center mt-3">
              <div className="plan-price font-weight-bold">
                <h3 className="mb-0 font-weight-bold">Enterprise</h3>
                <div className="pricing-desc">
                  <p className="">For established businesses</p>
                </div>
                <div className="pricing-price mb-4">
                  <h4 className="mb-0 font-weight-bold">CUSTOM</h4>
                </div>
              </div>
              <div className="mb-3">
                <a href="#contact-us" className="btn btn-custom btn-round">
                  Contact Sales
                </a>
              </div>
              <br />
              <div className="plan-features text-muted mb-5 text-left ml-5">
                <p>
                  Reviews: <b className="text-custom">Unlimited</b>
                </p>
                <p>
                  Insights: <b className="text-custom">Yes</b>
                </p>
                <p>
                  Members: <b className="text-custom">Unlimited Members</b>
                </p>
                <p>
                  Support: <b className="text-custom">Dedicated Manager</b>
                </p>
                <p>
                  Custom Product Tracking: <b className="text-custom">Yes</b>
                </p>
                <p>
                  Alerts & Notifictions: <b className="text-custom">Yes</b>
                </p>
                <p>
                  Custom Reports: <b className="text-custom">Yes</b>
                </p>
                <p>
                  SLA: <b className="text-custom">Yes</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;
