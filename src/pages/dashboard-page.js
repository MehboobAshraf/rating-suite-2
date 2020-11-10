import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';

import styles from '../styles/dashboard.module.css';

import DashboardPageContainerComponent from '../components/dashboard-components/dashboard-page-container.component';
import HeaderComponent from '../components/dashboard-components/header.component';
import SidebarComponent from '../components/dashboard-components/sidebar.component';
import SidebarMenuComponent from '../components/dashboard-components/sidebar-menu-items';
import AccountComponent from '../components/dashboard-components/account.component';
import FooterComponent from '../components/dashboard-components/footer.component';

import SignoutService from '../services/sign-out.service';
import UserService from '../services/user.service';

import { AuthContext } from '../context/AuthContext';

const DashboardPage = withRouter(({ history }) => {
  const {
    loggedInUser,
    setLoggedInUser,
    amplifyUser,
    setIsAuthenticated,
  } = useContext(AuthContext);
  const [isSideMenuCollapsed, setIsSideMenuCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('/dashboard');
  const [isLoading] = useState(false);
  const [errorMessage] = useState('');

  const updateUser = async (body) => {
    try {
      const response = await UserService.update(body);
      console.log('User updated successfully', response);
    } catch (e) {
      console.log('Update User Error', e);
    }
  };

  const signout = async () => {
    await SignoutService.signout();
    setLoggedInUser(null);
    setIsAuthenticated(false);
    history.push('/');
  };

  const deleteAccount = async () => {
    try {
      await UserService.delete();
      setLoggedInUser(null);
      setIsAuthenticated(false);
      history.push('/');
    } catch (e) {
      console.log('Delete Account Error', e);
    }
  };

  return (
    <DashboardPageContainerComponent>
      <SidebarComponent isSideMenuCollapsed={isSideMenuCollapsed}>
        <SidebarMenuComponent
          selectedMenuItem={selectedMenuItem}
          setSelectedMenuItem={setSelectedMenuItem}
        ></SidebarMenuComponent>
      </SidebarComponent>
      <Layout className={styles.site_layout}>
        <HeaderComponent
          loggedInUser={loggedInUser}
          isSideMenuCollapsed={isSideMenuCollapsed}
          setIsSideMenuCollapsed={setIsSideMenuCollapsed}
          signout={signout}
        ></HeaderComponent>
        {selectedMenuItem === '/dashboard/account' && (
          <AccountComponent
            user={amplifyUser}
            updateUser={updateUser}
            deleteAccount={deleteAccount}
            isLoading={isLoading}
            errorMessage={errorMessage}
          ></AccountComponent>
        )}
        <FooterComponent />
      </Layout>
    </DashboardPageContainerComponent>
  );
});

export default DashboardPage;
