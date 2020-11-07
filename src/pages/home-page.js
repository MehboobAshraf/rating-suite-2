import React from 'react';
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

const HomePage = withRouter(({ history }) => {
  return (
    <HomePageContainerComponent>
      <HeaderComponent></HeaderComponent>
      <HeroBannerComponent></HeroBannerComponent>
      <FeaturesComponent></FeaturesComponent>
      <InfoComponent></InfoComponent>
      <PricingComponent></PricingComponent>
      <FAQComponent></FAQComponent>
      <ContactUsComponent></ContactUsComponent>
      <FooterComponent></FooterComponent>
    </HomePageContainerComponent>
  );
});

export default HomePage;
