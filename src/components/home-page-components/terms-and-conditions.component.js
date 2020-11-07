import React from 'react';

const TermsAndConditionsComponent = (props) => {
  return (
    <section
      className="section bg-light bg-privacy"
      id="privacy-policy-section"
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-12">
            <i className="ti-package title-icon text-muted"></i>
            <h3 className="title">
              Terms <span className="font-weight-bold">and Conditions</span>
            </h3>
          </div>
        </div>
        <div className="row mt-4 justify-content-center text-center">
          <i>Last updated: September 6, 2020.</i>
        </div>
        <div className="row mt-4 justify-content-center text-center">
          <p>
            This privacy policy attempts to outline how Curious Concept websites
            collect and use information from their users.
          </p>
        </div>
        <div className="row mt-4 justify-content-center text-center">
          <h5>LOGS</h5>
        </div>
        <div className="row mt-2 justify-content-center text-center">
          <p>
            Like most other websites, Curious Concept websites collect
            non-personal information about users whenever they access them.
            These logs may include the browser name, the type of computer and
            technical information about the means of connection to the site,
            such as the operating system, the Internet service providers
            utilized and other similar information.
          </p>
        </div>
        <div className="row mt-4 justify-content-center text-center">
          <h5>COOKIES</h5>
        </div>
        <div className="row mt-2 justify-content-center text-center">
          <p>
            Cookies are files with small amount of data which are sent to your
            browser from a website and stored on your computer's hard drive.
            Curious Concept websites uses them to to track preferences and AB
            testing experiments. You can instruct your browser to refuse all
            cookies or to indicate when a cookie is being sent.
          </p>
        </div>
        <div className="row mt-4 justify-content-center text-center">
          <h5>DATA</h5>
        </div>
        <div className="row mt-2 justify-content-center text-center">
          <p>
            With the exception of deliberately submitted contact requests and
            error reports, Curious Concept websites do not collect or retain any
            data submitted by users. Any contact requests or error reports
            submitted will be kept confidential and deleted upon request.
          </p>
        </div>
        <div className="row mt-4 justify-content-center text-center">
          <h5>THIRD PARTY</h5>
        </div>
        <div className="row mt-2 justify-content-center text-center">
          <p>
            Curious Concept websites use reputable third party vendors to
            provide traffic analytics, security, and advertising services.
          </p>
        </div>
        <div className="row mt-4 justify-content-center text-center">
          <h5>SECURITY</h5>
        </div>
        <div className="row mt-2 justify-content-center text-center">
          <p>
            Additional security measures on Curious Concept websites are enabled
            by CloudFlare. To achieve this CloudFlare, like Curious Concept
            websites, collects non-personal information about users whenever
            they access Curious Concept websites and/or other sites on the
            Internet. These logs may include the browser name, the type of
            computer and technical information about the means of connection to
            the site, such as the operating system, the Internet service
            providers utilized and other similar information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditionsComponent;
