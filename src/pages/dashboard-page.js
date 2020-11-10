import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';

import styles from '../styles/dashboard.module.css';

import DashboardPageContainerComponent from '../components/dashboard-components/dashboard-page-container.component';
import HeaderComponent from '../components/dashboard-components/header.component';
import SidebarComponent from '../components/dashboard-components/sidebar.component';
import SidebarMenuComponent from '../components/dashboard-components/sidebar-menu-items';
import AccountComponent from '../components/dashboard-components/account.component';

import SignoutService from '../services/sign-out.service';
import UserService from '../services/user.service';

import { AuthContext } from '../context/AuthContext';

const DashboardPage = withRouter(({ history }) => {
  const { loggedInUser, setLoggedInUser, setIsAuthenticated } = useContext(
    AuthContext
  );
  const [isSideMenuCollapsed, setIsSideMenuCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('/dashboard');

  const signout = async () => {
    await SignoutService.signout();
    setLoggedInUser(null);
    setIsAuthenticated(false);
    history.push('/');
  };

  const deleteAccount = async () => {
    console.log('Delete Account');
    try {
      await UserService.delete();
      setLoggedInUser(null);
      setIsAuthenticated(false);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DashboardPageContainerComponent>
      <Layout>
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
          <AccountComponent
            loggedInUser={loggedInUser}
            deleteAccount={deleteAccount}
          ></AccountComponent>
          {/* {selectedMenuItem === '/dashboard/account' && (

          )} */}
        </Layout>
      </Layout>
    </DashboardPageContainerComponent>
  );
});

export default DashboardPage;
