import React from 'react';

const FooterComponent = (props) => {
  return (
    <section className="section footer section-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <ul className="list-inline social mb-0">
                <li className="list-inline-item">
                  <a
                    href="https://twitter.com/ratingsuite"
                    target="blank"
                    className="social-icon text-muted"
                  >
                    <i className="ti-twitter-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-terms">
              <ul className="mb-0 list-inline text-center mt-4 pt-2">
                <li className="list-inline-item">
                  <a href="/terms-and-conditions" className="text-muted">
                    Terms & Condition
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/privacy" className="text-muted">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-2 text-center">
              <p className="copy-rights text-muted mb-0">
                {new Date().getFullYear()} © Ratingsuite
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterComponent;
