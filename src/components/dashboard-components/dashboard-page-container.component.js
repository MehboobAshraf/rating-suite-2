import React from 'react';
import { Layout } from 'antd';

const DashboardPageContainerComponent = (props) => {
  return <Layout>{props.children}</Layout>;
};

export default DashboardPageContainerComponent;
