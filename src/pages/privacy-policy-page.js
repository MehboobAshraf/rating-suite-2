import React from 'react';
import { withRouter } from 'react-router-dom';

import HomePageContainerComponent from '../components/home-page-components/home-page-container.component';
import HeaderComponent from '../components/home-page-components/header.component';
import FooterComponent from '../components/home-page-components/footer.component';
import PrivacyPolicyComponent from '../components/home-page-components/privacy-policy.component';

const PrivacyPolicyPage = withRouter(({ history }) => {
  return (
    <HomePageContainerComponent>
      <HeaderComponent></HeaderComponent>
      <PrivacyPolicyComponent></PrivacyPolicyComponent>
      <FooterComponent></FooterComponent>
    </HomePageContainerComponent>
  );
});

export default PrivacyPolicyPage;
