import React from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { useForm } from 'react-hook-form';

import ProductFeatures from './product-features.component';

const SignUpFormComponent = (props) => {
  const { register, handleSubmit, errors, getValues, reset } = useForm();

  const onSubmit = (data) => {
    if (data.name && data.organization && data.email && data.password) {
      props.onSubmit(
        {
          name: data.name,
          organization: data.organization,
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

  return (
    <section className="bg-signup">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-0 col-lg-4">
            <div className="login-table">
              <div className="login-table-cell">
                <div className="container-fliud">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="login-logo text-center">
                        <Link to="/">
                          <img src="/images/logo/header-logo.png" alt="" />
                        </Link>
                      </div>

                      <div className="bg-white mt-4 rounded">
                        <div className="before-login-text">
                          <h4 className="font-weight-bold mb-3">Register</h4>
                          <p>
                            Have an account?
                            <Link to="/signin">Sign In</Link>
                          </p>
                        </div>
                        <form
                          className="login-form"
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          <div className="row">
                            <div className="col-lg-12 mt-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                ref={register({
                                  required: true,
                                })}
                              />
                              {errors.name && (
                                <span>{errors.name.message}</span>
                              )}
                            </div>
                            <div className="col-lg-12 mt-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Organization"
                                name="organization"
                                ref={register({
                                  required: true,
                                })}
                              />
                              {errors.organization && (
                                <span>{errors.organization.message}</span>
                              )}
                            </div>
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
                            </div>
                            <div className="col-lg-12 mt-2">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                ref={register({
                                  validate: (value) => {
                                    if (value === getValues('password')) {
                                      return true;
                                    } else {
                                      return (
                                        <span>Password fields don't match</span>
                                      );
                                    }
                                  },
                                  required: true,
                                })}
                              />

                              {errors.confirmPassword && (
                                <span>{errors.confirmPassword.message}</span>
                              )}
                            </div>
                            <div className="col-lg-12 mt-2">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck1"
                                  name="checkTermsAndConditions"
                                  ref={register({
                                    required:
                                      'Please accept the Terms & Conditions',
                                  })}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck1"
                                >
                                  I Accept{' '}
                                  <a
                                    href="/terms-and-conditions"
                                    target="blank"
                                  >
                                    Terms And Condition
                                  </a>
                                </label>
                                {errors.checkTermsAndConditions && (
                                  <p>
                                    {errors.checkTermsAndConditions.message}
                                  </p>
                                )}
                              </div>
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
                                Register
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

export default SignUpFormComponent;
