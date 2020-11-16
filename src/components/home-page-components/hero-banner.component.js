import React from 'react';
import { Spinner } from 'reactstrap';
import { useForm } from 'react-hook-form';

import DemoVideoModal from './demo-video-modal.component';

const HeroBannerComponent = (props) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const onEmailSubmit = (data) => {
    if (data.email) {
      props.emailSubmit(
        {
          email: data.email,
        },
        onReset
      );
    }
  };
  const onReset = () => {
    reset();
  };

  const toggleShowVideoModalpopup = () => {
    props.toggleShowVideoModalpopup();
  };

  return (
    <section className="bg-home bg-home-full" id="home">
      <div className="home-center">
        <div className="home-desc-center">
          <div className="container">
            <div className="row vertical-content">
              <div className="col-lg-5 col-md-6">
                <div>
                  <h1 className="home-title mb-0">
                    Monitor all your product reviews from multiple channels in
                    one place
                  </h1>
                  <p className="home-subtitle mt-4 mb-0">
                    Build new product features from voice of customers that
                    boosts customer satisfaction and drives growth
                  </p>
                </div>
                <div className="mt-4">
                  <form onSubmit={handleSubmit(onEmailSubmit)}>
                    <div className="row">
                      <div className="col-lg-10">
                        <div className="input-group mb-3">
                          <input
                            className="form-control watch-demo-email-input"
                            placeholder="Enter your email"
                            aria-describedby="basic-addon2"
                            type="email"
                            name="email"
                            ref={register({
                              required: true,
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                              },
                            })}
                          />
                          <div className="input-group-append">
                            <button className="btn btn-demo" type="submit">
                              {props.isLoading ? (
                                <Spinner
                                  size="sm"
                                  type="grow"
                                  color="light"
                                  className="mr-2"
                                />
                              ) : (
                                ''
                              )}{' '}
                              WATCH DEMO
                            </button>
                          </div>
                        </div>
                        {errors.email && <span>{errors.email.message}</span>}
                      </div>
                    </div>
                  </form>
                  <DemoVideoModal
                    showVideoModalPopup={props.showVideoModalPopup}
                    toggleShowVideoModalpopup={toggleShowVideoModalpopup}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 d-md-block d-lg-block mt-2">
                <img
                  className="hero-banner-image"
                  src="./hero-banner.png"
                  alt="Hero Banner"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerComponent;
