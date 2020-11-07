import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faSeedling,
  faTachometerAlt,
  faFileMedicalAlt,
  faFileSignature,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';

const ProductFeatures = (props) => {
  return (
    <div className="login-right-box-bg col-lg-8 col-md-6 p-0 text-left">
      <div className="row m-0">
        <div className="container">
          <div className="login-right-box">
            <div className="content">
              <h3 className="title">Build features that customers want!</h3>

              <p>
                Access product reviews from multiple channels in one dashboard
              </p>

              <div className="row mt-5">
                <div className="col">
                  <FontAwesomeIcon className="feature-auth" icon={faGlobe} />
                  <p className="d-inline ml-2 items">Review Analytics</p>
                </div>
                <div className="col">
                  <FontAwesomeIcon className="feature-auth" icon={faSeedling} />
                  <p className="d-inline ml-2 items">Competitor analysis</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <FontAwesomeIcon
                    className="feature-auth"
                    icon={faTachometerAlt}
                  />
                  <p className="d-inline ml-2 items">Customer sentiment</p>
                </div>
                <div className="col">
                  <FontAwesomeIcon className="feature-auth" icon={faEdit} />
                  <p className="d-inline ml-2 items">Unlimited Reviews</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <FontAwesomeIcon
                    className="feature-auth"
                    icon={faFileMedicalAlt}
                  />
                  <p className="d-inline ml-2 items">Enterprise support</p>
                </div>
                <div className="col">
                  <FontAwesomeIcon
                    className="feature-auth"
                    icon={faFileSignature}
                  />
                  <p className="d-inline ml-2 items">Fast and Intuitive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
