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
import LoaderComponent from '../components/dashboard-components/loader.component';

import SignoutService from '../services/sign-out.service';
import UserService from '../services/user.service';

import { AuthContext } from '../context/AuthContext';

const { Content } = Layout;

console.log(styles);
const DashboardPage = withRouter(({ history }) => {
  const {
    loggedInUser,
    setLoggedInUser,
    amplifyUser,
    setAmplifyUser,
    setIsAuthenticated,
    isLoadingAuthContext,
  } = useContext(AuthContext);
  const [isSideMenuCollapsed, setIsSideMenuCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('/dashboard');
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
          <Content
            className={`${styles.ant_layout_content} ${styles.site_layout_background}`}
            style={{
              margin: '0 16px',
              padding: 24,
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
            {selectedMenuItem === '/dashboard/account' && (
              <AccountComponent
                user={amplifyUser}
                updateUser={updateUser}
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
      </Layout>
    </>
    // <DashboardPageContainerComponent>
    //   <SidebarComponent isSideMenuCollapsed={isSideMenuCollapsed}>
    //     <SidebarMenuComponent
    //       selectedMenuItem={selectedMenuItem}
    //       setSelectedMenuItem={setSelectedMenuItem}
    //     ></SidebarMenuComponent>
    //   </SidebarComponent>
    //   <Layout className={styles.site_layout}>
    //     <HeaderComponent
    //       loggedInUser={loggedInUser}
    //       isSideMenuCollapsed={isSideMenuCollapsed}
    //       setIsSideMenuCollapsed={setIsSideMenuCollapsed}
    //       signout={signout}
    //     ></HeaderComponent>
    //     {(isLoadingAuthContext || isLoading || isDeletingAccount) && (
    //       <LoaderComponent />
    //     )}
    //     <div className="row">
    //       <div className="col-12">
    //         <p>Dashboard ({loggedInUser ? loggedInUser.username : null})</p>
    //       </div>
    //     </div>

    //     <FooterComponent />
    //   </Layout>
    // </DashboardPageContainerComponent>
  );
});

export default DashboardPage;
