import React, { useContext, useState } from 'react';
import { withRouter, useLocation } from 'react-router-dom';
import { Layout } from 'antd';

import styles from '../styles/dashboard.module.css';

import DashboardPageContainerComponent from '../components/dashboard-components/dashboard-page-container.component';
import HeaderComponent from '../components/dashboard-components/header.component';
import SidebarComponent from '../components/dashboard-components/sidebar.component';
import SidebarMenuComponent from '../components/dashboard-components/sidebar-menu-items';
import ProductSetupComponent from '../components/dashboard-components/product-setup.component';
import ReviewsComponent from '../components/dashboard-components/reviews.component';
import InsightsComponent from '../components/dashboard-components/insights.component';
import ComparisonComponent from '../components/dashboard-components/comparison.component';
import AccountComponent from '../components/dashboard-components/account.component';
import FooterComponent from '../components/dashboard-components/footer.component';
import LoaderComponent from '../components/dashboard-components/loader.component';

import UserService from '../services/user.service';
import NotificationsService from '../services/notifications.service';
import SignoutService from '../services/sign-out.service';

import { AuthContext } from '../context/AuthContext';

const { Content } = Layout;

const DashboardPage = withRouter(({ history }) => {
  const {
    loggedInUser,
    setLoggedInUser,
    amplifyUser,
    setAmplifyUser,
    notificationFlag,
    setNotificationFlag,
    setIsAuthenticated,
    isLoadingAuthContext,
  } = useContext(AuthContext);
  const [isSideMenuCollapsed, setIsSideMenuCollapsed] = useState(false);
  const { pathname } = useLocation();
  const [selectedMenuItem, setSelectedMenuItem] = useState(pathname);
  const [isLoading, setLoading] = useState(false);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);
  const [errorMessage] = useState('');

  const updateUser = async (body) => {
    setLoading(true);
    try {
      await UserService.update(body);
      const ampUser = await UserService.get();
      setAmplifyUser(ampUser[0]);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log('Update User Error', e);
    }
  };

  const updateNotificationFlag = async (body) => {
    setLoading(true);
    try {
      await NotificationsService.update(body);
      const notificationsResponse = await NotificationsService.get();
      setNotificationFlag(!!notificationsResponse[0].flag);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log('Update Notification Error', e);
    }
  };

  const signout = async () => {
    await SignoutService.signout();
    setLoggedInUser(null);
    setIsAuthenticated(false);
    history.push('/');
  };

  const deleteAccount = async () => {
    setIsDeletingAccount(true);
    try {
      await UserService.delete();
      setIsDeletingAccount(false);
      setLoggedInUser(null);
      setIsAuthenticated(false);
      history.push('/');
    } catch (e) {
      setIsDeletingAccount(false);
      console.log('Delete Account Error', e);
    }
  };

  return (
    <>
      <DashboardPageContainerComponent>
        <SidebarComponent isSideMenuCollapsed={isSideMenuCollapsed}>
          <SidebarMenuComponent
            selectedMenuItem={selectedMenuItem}
            setSelectedMenuItem={setSelectedMenuItem}
            userType={amplifyUser && amplifyUser.userType}
            userStatus={amplifyUser && amplifyUser.userStatus}
          ></SidebarMenuComponent>
        </SidebarComponent>
        <Layout className={styles.site_layout}>
          <HeaderComponent
            loggedInUser={loggedInUser}
            isSideMenuCollapsed={isSideMenuCollapsed}
            setIsSideMenuCollapsed={setIsSideMenuCollapsed}
            signout={signout}
            setSelectedMenuItem={setSelectedMenuItem}
            userStatus={amplifyUser && amplifyUser.userStatus}
          ></HeaderComponent>
          <Content
            className={`${styles.ant_layout_content} ${styles.site_layout_background}`}
            style={{
              margin: '17px 16px',
              padding: '24px 0',
            }}
          >
            {(isLoadingAuthContext || isLoading || isDeletingAccount) && (
              <LoaderComponent />
            )}
            {selectedMenuItem === '/dashboard' && (
              <div className="row">
                <div className="col-12 text-left">
                  <p>
                    Dashboard ({loggedInUser ? loggedInUser.username : null})
                  </p>
                </div>
              </div>
            )}

            {selectedMenuItem === '/dashboard/product-setup' && (
              <ProductSetupComponent></ProductSetupComponent>
            )}
            {selectedMenuItem === '/dashboard/reviews' && (
              <ReviewsComponent></ReviewsComponent>
            )}
            {selectedMenuItem === '/dashboard/insights' && (
              <InsightsComponent></InsightsComponent>
            )}
            {selectedMenuItem === '/dashboard/comparison' && (
              <ComparisonComponent></ComparisonComponent>
            )}
            {selectedMenuItem === '/dashboard/account' && (
              <AccountComponent
                user={amplifyUser}
                updateUser={updateUser}
                notificationFlag={notificationFlag}
                updateNotificationFlag={updateNotificationFlag}
                deleteAccount={deleteAccount}
                isDeletingAccount={isDeletingAccount}
                isLoadingAuthContext={isLoadingAuthContext}
                isLoading={isLoading}
                errorMessage={errorMessage}
              ></AccountComponent>
            )}
          </Content>
          <FooterComponent />
        </Layout>
      </DashboardPageContainerComponent>
    </>
  );
});

export default DashboardPage;
