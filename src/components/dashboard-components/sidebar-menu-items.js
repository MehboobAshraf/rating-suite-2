import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import {
  DashboardOutlined,
  AppstoreAddOutlined,
  SettingOutlined,
  CommentOutlined,
  BulbOutlined,
  MergeCellsOutlined,
} from '@ant-design/icons';

const SidebarMenuComponent = ({
  selectedMenuItem,
  setSelectedMenuItem,
  userType,
  userStatus,
}) => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[selectedMenuItem]}
      onClick={(e) => {
        setSelectedMenuItem(e.key);
      }}
    >
      <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
        <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>

      <Menu.Item key="/dashboard/product-setup" icon={<AppstoreAddOutlined />}>
        <Link to="/dashboard/product-setup">Product Setup</Link>
      </Menu.Item>

      <Menu.Item
        className={
          userStatus === 'NEW' || userStatus === 'PROSPECT'
            ? 'link-disabled'
            : ''
        }
        key="/dashboard/reviews"
        icon={<CommentOutlined />}
      >
        <Link to="/dashboard/reviews">Reviews</Link>
      </Menu.Item>

      <Menu.Item
        className={
          userStatus === 'NEW' || userStatus === 'PROSPECT'
            ? 'link-disabled'
            : ''
        }
        key="/dashboard/insights"
        icon={<BulbOutlined />}
      >
        <Link to="/dashboard/insights">Insights</Link>
      </Menu.Item>

      <Menu.Item
        className={
          userStatus === 'NEW' || userStatus === 'PROSPECT'
            ? 'link-disabled'
            : ''
        }
        key="/dashboard/comparison"
        icon={<MergeCellsOutlined />}
      >
        <Link to="/dashboard/comparison">Comparison</Link>
      </Menu.Item>

      <Menu.Item key="/dashboard/account" icon={<SettingOutlined />}>
        <Link to="/dashboard/account">Account</Link>
      </Menu.Item>
    </Menu>
  );
};

export default SidebarMenuComponent;
