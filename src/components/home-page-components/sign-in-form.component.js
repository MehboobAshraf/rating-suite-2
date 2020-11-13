import React from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { useForm } from 'react-hook-form';

import ProductFeatures from './product-features.component';

const SignInFormComponent = (props) => {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSignInSubmit = (data) => {
    if (data.email && data.password) {
      props.onSubmit(
        {
          email: data.email,
          password: data.password,
        },
        onReset
      );
    }
  };

  const onReset = () => {
    reset();
  };

  const onOpenForgotPasswordForm = () => {
    props.onOpenForgotPasswordForm();
  };

  return (
    <section className="bg-signin">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-lg-4 p-0">
            <div className="login-table">
              <div className="login-table-cell">
                <div className="container-fluid">
                  {props.signedUpSuccessMessage && (
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <div className="alert alert-success" role="alert">
                          <p>{props.signedUpSuccessMessage}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="login-logo text-center">
                        <Link to="/">
                          <img src="/images/logo/header-logo.png" alt="" />
                        </Link>
                      </div>

                      <div className="bg-white mt-4 rounded">
                        <div className="before-login-text">
                          <h4 className="font-weight-bold mb-3">Sign In</h4>
                          <p>
                            New here?
                            <Link to="/signup">Create an account</Link>
                          </p>
                        </div>
                        <form
                          className="login-form"
                          onSubmit={handleSubmit(onSignInSubmit)}
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
                            </div>
                            <div className="col-lg-12 mt-2">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                ref={register({
                                  required: true,
                                })}
                              />
                              {errors.password && (
                                <span>{errors.password.message}</span>
                              )}
                              <p
                                className="text-right forgot-password"
                                onClick={onOpenForgotPasswordForm}
                              >
                                <a href="/forgot-password">Forgot Password?</a>
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
                                Sign In
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

export default SignInFormComponent;
