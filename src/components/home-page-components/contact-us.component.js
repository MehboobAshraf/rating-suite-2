import React from 'react';
import { Alert, Spinner } from 'reactstrap';
import { useForm } from 'react-hook-form';

const ContactUsComponent = (props) => {
  const { register, handleSubmit, errors, reset } = useForm();

  const onContactUsFormSubmit = (data) => {
    if (
      data.email &&
      data.firstName &&
      data.lastName &&
      data.subject &&
      data.message
    ) {
      props.submitContactUsForm(
        {
          email: data.email,
          name: data.firstName + ' ' + data.lastName,
          body: data.message,
          subject: data.subject,
        },
        onReset
      );
    }
  };

  const onReset = () => {
    reset();
  };

  return (
    <section className="section " id="contact-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="mt-4 pt-4">
              <h3>
                <span className="font-weight-bold">CONTACT</span>
              </h3>
              <p className="text-muted mt-4">
                <span className="font-weight-bold">Sales/Partnership:</span>
                <a href="mailto:contact@ratingsuite.com" className="text-muted">
                  <span className="d-block mt-2">contact@ratingsuite.com</span>
                </a>
              </p>
              <p className="text-muted mt-4">
                <span className="font-weight-bold">Account:</span>
                <a href="mailto:support@ratingsuite.com" className="text-muted">
                  <span className="d-block mt-2">support@ratingsuite.com</span>
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-8 custom-box-shadow">
            <div className="custom-form mt-2 pt-4">
              <h4 className="mb-4 text-center">
                Give us a shout and we will get back to you!
              </h4>
              <div id="message"></div>
              <form
                name="contact-form"
                id="contact-form"
                onSubmit={handleSubmit(onContactUsFormSubmit)}
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        name="email"
                        ref={register({
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                      />
                      {errors.email && <span>{errors.email.message}</span>}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        id="firstName"
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="firstName"
                        ref={register({
                          required: true,
                        })}
                      />
                      {errors.firstName && (
                        <span>{errors.firstName.message}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        id="lastName"
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="lastName"
                        ref={register({
                          required: true,
                        })}
                      />
                      {errors.lastName && (
                        <span>{errors.lastName.message}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        id="subject"
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        ref={register({
                          required: true,
                        })}
                      />
                      {errors.subject && <span>{errors.subject.message}</span>}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <textarea
                        className="form-control"
                        id="message"
                        cols="30"
                        rows="6"
                        placeholder="Message"
                        name="message"
                        ref={register({
                          required: true,
                        })}
                      ></textarea>
                      {errors.message && <span>{errors.message.message}</span>}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 text-right">
                    <div className="form-group mt-4">
                      <button
                        type="submit"
                        className="submitBnt btn btn-round btn-custom"
                        name="send"
                        id="submit"
                      >
                        {props.isLoading ? (
                          <Spinner
                            size="sm"
                            type="grow"
                            color="light"
                            className="mr-2"
                          />
                        ) : (
                          ''
                        )}
                        Send Message
                      </button>
                    </div>
                    <div id="simple-msg"></div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-12">
                    {props.isFormSubmittedSuccess && (
                      <Alert color="success">
                        Thanks for reaching out. We have received your request
                        and we will get back to you shortly.
                      </Alert>
                    )}
                    {props.errorMessage && (
                      <Alert color="danger">{props.errorMessage}</Alert>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsComponent;
