import React from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { useForm } from 'react-hook-form';

import ProductFeatures from './product-features.component';

const ResetPasswordFormComponent = (props) => {
  const { register, handleSubmit, errors, reset } = useForm();

  const onResetPasswordSubmit = (data) => {
    if (data.newPassword && data.code) {
      props.onResetPassword(
        { email: data.email, newPassword: data.newPassword, code: data.code },
        onReset
      );
    }
  };

  const onReset = () => {
    reset();
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
                            Reset Password
                          </h4>
                        </div>
                        <form
                          className="login-form"
                          onSubmit={handleSubmit(onResetPasswordSubmit)}
                        >
                          <div className="row">
                            <div className="col-lg-12 mt-2">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={props.passwordResetEmail}
                                readOnly
                              />
                            </div>
                            <div className="col-lg-12 mt-2">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="New Password"
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
                                type="text"
                                className="form-control"
                                placeholder="Code"
                                name="code"
                                ref={register({
                                  required: true,
                                })}
                              />
                              {errors.code && (
                                <span>{errors.code.message}</span>
                              )}
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

export default ResetPasswordFormComponent;
