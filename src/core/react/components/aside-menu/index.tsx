import React from "react";
import { Menu, Layout } from "antd";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";

const { Sider } = Layout;

export const AsideMenu: React.FC = () => {
  return (
    <Sider>
      <div className="logo" />
      <Menu theme="dark" mode="inline">
        <Menu.Item key="form" icon={<PieChartOutlined />}>
          Form
        </Menu.Item>
        <Menu.Item key="list" icon={<DesktopOutlined />}>
          List
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
