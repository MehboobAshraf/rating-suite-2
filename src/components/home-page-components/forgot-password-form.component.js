import React from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { useForm } from 'react-hook-form';

import ProductFeatures from './product-features.component';

const ForgotPasswordFormComponent = (props) => {
  const { register, handleSubmit, errors, reset } = useForm();

  const onForgotPasswordSubmit = (data) => {
    if (data.email) {
      props.onForgotPassword({ email: data.email }, onReset);
    }
  };

  const onReset = () => {
    reset();
  };

  const onOpenSignInForm = () => {
    props.onOpenSignInForm();
  };

  return (
    <section className="bg-signin">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 pt-5 p-0">
            <div className="login-table">
              <div className="login-table-cell">
                <div className="">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="login-logo text-center">
                        <Link to="/">
                          <img src="/images/logo/header-logo.png" alt="" />
                        </Link>
                      </div>
                      <div className="bg-white p-4 mt-4 rounded">
                        <div className="before-login-text">
                          <h4 className="font-weight-bold mb-3">
                            Forgot Password
                          </h4>
                        </div>
                        <form
                          className="login-form"
                          onSubmit={handleSubmit(onForgotPasswordSubmit)}
                        >
                          <div className="row">
                            <div className="col-lg-12 mt-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                ref={register({
                                  required: true,
                                  pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                  },
                                })}
                              />
                              {errors.email && (
                                <span>{errors.email.message}</span>
                              )}
                              <p
                                className="text-right forgot-password"
                                onClick={onOpenSignInForm}
                              >
                                <a>Sign In</a>
                              </p>
                            </div>
                            <div className="col-lg-12 mt-4 mb-2">
                              <button className="btn btn-round btn-custom w-100">
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
                                Submit
                              </button>
                            </div>
                            <div className="col-lg-12 text-center text-danger">
                              {props.errorMessage ? props.errorMessage : ''}
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductFeatures />
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordFormComponent;
