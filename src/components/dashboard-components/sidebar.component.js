import React from 'react';
import { Layout } from 'antd';
import styles from '../../styles/sidebar.module.css';
const { Sider } = Layout;

const SidebarComponent = (props) => {
  return (
    <Sider
      trigger={null}
      breakpoint="lg"
      collapsedWidth="0"
      collapsible
      collapsed={props.isSideMenuCollapsed}
      className="d-none d-sm-block"
    >
      <div className={styles.logo}>
        <img src="/images/logo/dashboard-logo.png" alt="" />
      </div>
      {props.children}
    </Sider>
  );
};

export default SidebarComponent;
