import React from 'react';

const InfoComponent = (props) => {
  return (
    <section className="section bg-light" id="services">
      <div className="container">
        <div className="row justify-content-center text-center"></div>
        <div className="row vertical-content">
          <div className="col-lg-6 mt-2">
            <div>
              <img
                src="/images/mockup2.png"
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 mt-2">
            <div className="features-desc">
              <h2>
                Get advanced reports to analyze key product review metrics,
                trends and customer sentiments
              </h2>
              <p className="text-muted mt-3">
                Our dynamic interface allows you to visualize key review metrics
                in aggregates by different products, ratings, time, sentiment
                and review source
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 pt-5 vertical-content">
          <div className="col-lg-5 mt-2">
            <div className="features-desc">
              <h2>
                Gain insights into what your customers are saying about your
                product
              </h2>
              <p className="text-muted mt-3">
                Dig deep into your reviews through our advanced deep learning
                model to see what features are most frequently mentioned by your
                customers
              </p>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 mt-2">
            <div>
              <img
                src="/images/mockup1.png"
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoComponent;
