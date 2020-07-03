import React, { ReactNode } from "react";
import { Layout } from "antd";

import "./main-layout.style.less";

import { AsideMenu } from "../aside-menu";

const { Header, Content, Footer } = Layout;

interface Props {
  children?: ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }: Props) => (
  <Layout className="global-layout">
    <AsideMenu />
    <Layout className="main-layout">
      <Header className="main-layout-background" />
      <Content className="main-layout-content">{children}</Content>
      <Footer className="main-layout-footer">
        Neogrid ©2020 Created by Architecture Team
      </Footer>
    </Layout>
  </Layout>
);
