import React from 'react';

const FeaturesComponent = (props) => {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-12">
            <h3 className="title">
              <span className="font-weight-bold">Features</span>
            </h3>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="services-box">
              <div className="services-icon">
                <i className="ti-settings text-custom"></i>
              </div>
              <div className="mt-3">
                <h5 className="services-title font-weight-bold mb-3">
                  Review Analytics
                </h5>
                <p className="services-subtitle text-muted">
                  Cutting edge machine learning and NLP technique to extract key
                  insights from reviews
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="services-box">
              <div className="services-icon">
                <i className="ti-palette text-custom"></i>
              </div>
              <div className="mt-3">
                <h5 className="services-title font-weight-bold mb-3">
                  Competitor analysis
                </h5>
                <p className="services-subtitle text-muted">
                  Compare your product metrics over your competitors in simple
                  charts
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="services-box">
              <div className="services-icon">
                <i className="ti-stats-up text-custom"></i>
              </div>
              <div className="mt-3">
                <h5 className="services-title font-weight-bold mb-3">
                  Customer sentiment
                </h5>
                <p className="services-subtitle text-muted">
                  Advanced deep learning algorithm to surface customer
                  sentiments
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="services-box">
              <div className="services-icon">
                <i className="ti-package text-custom"></i>
              </div>
              <div className="mt-3">
                <h5 className="services-title font-weight-bold mb-3">
                  Unlimited Reviews
                </h5>
                <p className="services-subtitle text-muted">
                  Highly scalable and available infrastructure to track
                  unlimited product reviews
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="services-box">
              <div className="services-icon">
                <i className="ti-dashboard text-custom"></i>
              </div>
              <div className="mt-3">
                <h5 className="services-title font-weight-bold mb-3">
                  Enterprise support
                </h5>
                <p className="services-subtitle text-muted">
                  Dedicated customer success manager for 24*7 support
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="services-box">
              <div className="services-icon">
                <i className="ti-headphone text-custom"></i>
              </div>
              <div className="mt-3">
                <h5 className="services-title font-weight-bold mb-3">
                  Fast and Intuitive
                </h5>
                <p className="services-subtitle text-muted">
                  Modern web technologies to make your experience better with
                  fast and intuitive design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesComponent;
