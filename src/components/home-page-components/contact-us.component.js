import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert, Spinner } from 'reactstrap';

const ContactUsFormSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  lastName: Yup.string().required('Required'),
  subject: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
});

const ContactUsComponent = (props) => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      subject: '',
      message: '',
    },
    validationSchema: ContactUsFormSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      setIsSuccess(false);
      setIsError(false);
      // try {
      //   const response = await contactUsService.create({
      //     email: values.email,
      //     name: values.firstName + ' ' + values.lastName,
      //     body: values.message,
      //     subject: values.subject,
      //   });
      //   if (response.status === 200) {
      //     setIsSuccess(true);
      //   } else {
      //     setIsError(response.data.message);
      //   }
      //   setIsLoading(false);
      // } catch (err) {
      //   setIsLoading(false);
      //   setIsError('Please try again later');
      // }
    },
  });

  return (
    <section className="section " id="contact-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="mt-4 pt-4">
              <h3>
                CONTACT <span className="font-weight-bold">US</span>
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
                onSubmit={formik.handleSubmit}
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="form-control"
                        placeholder="Email*"
                      />
                      {formik.errors.email && formik.touched.email && (
                        <div className="form-error">
                          * {formik.errors.email}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        name="firstName"
                        id="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        className="form-control"
                        placeholder="First Name*"
                      />
                      {formik.errors.firstName && formik.touched.firstName && (
                        <div className="form-error">
                          * {formik.errors.firstName}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        name="lastName"
                        id="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        className="form-control"
                        placeholder="Last Name*"
                      />
                      {formik.errors.lastName && formik.touched.lastName && (
                        <div className="form-error">
                          * {formik.errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        name="subject"
                        id="subject"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.subject}
                        className="form-control"
                        placeholder="Subject*"
                      />
                      {formik.errors.subject && formik.touched.subject && (
                        <div className="form-error">
                          * {formik.errors.subject}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols="30"
                        rows="6"
                        placeholder="Message"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                      ></textarea>
                      {formik.errors.message && formik.touched.message && (
                        <div className="form-error">
                          * {formik.errors.message}
                        </div>
                      )}
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
                        {isLoading && (
                          <Spinner
                            size="sm"
                            type="grow"
                            color="light"
                            className="mr-2"
                          />
                        )}
                        Send Message
                      </button>
                    </div>

                    <div id="simple-msg"></div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-12">
                    {isSuccess && (
                      <Alert color="success">
                        Thanks for reaching out. We have received your request
                        and we will get back to you shortly.
                      </Alert>
                    )}
                    {isError && <Alert color="danger">{isError}</Alert>}
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
