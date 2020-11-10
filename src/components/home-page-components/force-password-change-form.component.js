import React from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { useForm } from 'react-hook-form';

import ProductFeatures from './product-features.component';

const ForcePasswordChangeFormComponent = (props) => {
  const { register, handleSubmit, errors, getValues, reset } = useForm();

  const onChangePasswordSubmit = (data) => {
    if (data.oldPassword && data.newPassword) {
      props.onChangePassword(
        {
          newPassword: data.newPassword,
        },
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
                            Reset New Passwpord
                          </h4>
                          <p>You need to reset your password to continue</p>
                        </div>
                        <form
                          className="login-form"
                          onSubmit={handleSubmit(onChangePasswordSubmit)}
                        >
                          <div className="row">
                            <div className="col-lg-12 mt-2">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Old Password"
                                name="oldPassword"
                                ref={register({
                                  required: true,
                                })}
                              />
                              {errors.oldPassword && (
                                <span>{errors.oldPassword.message}</span>
                              )}
                            </div>
                            <div className="col-lg-12 mt-2">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="New Password"
                                name="newPassword"
                                ref={register({
                                  required: true,
                                })}
                              />
                              {errors.newPassword && (
                                <span>{errors.newPassword.message}</span>
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
                                    if (value === getValues('newPassword')) {
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
                            {/* {props.showSuccessMessage ? (
                              <div className="col-lg-12 text-center text-success">
                                Your password has been reset successfully.
                                <br />
                                Please <a href="/signin">Sign In</a> to
                                continue.
                              </div>
                            ) : (
                              ''
                            )} */}
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

export default ForcePasswordChangeFormComponent;
