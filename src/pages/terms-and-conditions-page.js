import React from 'react';
import { withRouter } from 'react-router-dom';

import HomePageContainerComponent from '../components/home-page-components/home-page-container.component';
import HeaderComponent from '../components/home-page-components/header.component';
import TermsAndConditionsComponent from '../components/home-page-components/terms-and-conditions.component';
import FooterComponent from '../components/home-page-components/footer.component';

const TermsAndConditionsPage = withRouter(({ history }) => {
  return (
    <HomePageContainerComponent>
      <HeaderComponent></HeaderComponent>
      <TermsAndConditionsComponent></TermsAndConditionsComponent>
      <FooterComponent></FooterComponent>
    </HomePageContainerComponent>
  );
});

export default TermsAndConditionsPage;
