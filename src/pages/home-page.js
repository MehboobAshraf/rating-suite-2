import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import HomePageContainerComponent from '../components/home-page-components/home-page-container.component';
import HeaderComponent from '../components/home-page-components/header.component';
import HeroBannerComponent from '../components/home-page-components/hero-banner.component';
import FeaturesComponent from '../components/home-page-components/features.component';
import InfoComponent from '../components/home-page-components/info.component';
import PricingComponent from '../components/home-page-components/pricing.component';
import FAQComponent from '../components/home-page-components/faq.component';
import ContactUsComponent from '../components/home-page-components/contact-us.component';
import FooterComponent from '../components/home-page-components/footer.component';

import ContactUsService from '../services/contact-us.service';

const HomePage = withRouter(({ history }) => {
  const [showVideoModalPopup, setShowVideoModalPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toggleShowVideoModalpopup = () => {
    setShowVideoModalPopup(!showVideoModalPopup);
  };
  const [isFormSubmittedSuccess, setIsFormSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Store email of user and play the video for them
  const emailSubmit = async ({ email }, onReset) => {
    setIsLoading(true);
    try {
      await ContactUsService.create({
        email,
        name: '',
        body: '',
        subject: '',
      });
      setShowVideoModalPopup(true);
      setIsLoading(false);
      onReset();
    } catch (e) {
      setIsLoading(false);
    }
  };

  const submitContactUsForm = async (
    { email, name, body, subject },
    onReset
  ) => {
    setIsLoading(true);
    try {
      await ContactUsService.create({
        email,
        name,
        body,
        subject,
      });
      setIsLoading(false);
      setErrorMessage('');
      setIsFormSubmittedSuccess(true);
      onReset();
    } catch (e) {
      setIsLoading(false);
      setErrorMessage('Something went wrong. Please try again');
    }
  };

  return (
    <HomePageContainerComponent>
      <HeaderComponent></HeaderComponent>
      <HeroBannerComponent
        isLoading={isLoading}
        emailSubmit={emailSubmit}
        showVideoModalPopup={showVideoModalPopup}
        toggleShowVideoModalpopup={toggleShowVideoModalpopup}
      ></HeroBannerComponent>
      <FeaturesComponent></FeaturesComponent>
      <InfoComponent></InfoComponent>
      <PricingComponent></PricingComponent>
      <FAQComponent></FAQComponent>
      <ContactUsComponent
        isLoading={isLoading}
        errorMessage={errorMessage}
        isFormSubmittedSuccess={isFormSubmittedSuccess}
        submitContactUsForm={submitContactUsForm}
      ></ContactUsComponent>
      <FooterComponent></FooterComponent>
    </HomePageContainerComponent>
  );
});

export default HomePage;
