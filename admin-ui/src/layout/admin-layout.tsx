import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { ProLayout } from "@ant-design/pro-components";
import { Dropdown } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAdminMenu } from "./use-admin-menu";
import getAuthStore from "../auth/auth-store/store";
import { useApolloClient } from "@apollo/client";

export const AdminLayout = () => {
    const location = useLocation();

    const menu = useAdminMenu();

    const menuItemRender = (item: any, dom: any) => (item && item.path)
        ? <Link to={item.path}> {dom} </Link>
        : dom;

    const client = useApolloClient();

    const logout = async () => {
        await Promise.all([
            getAuthStore().setUser(null),
            getAuthStore().setTokens(null),
            client.clearStore(),
        ]);
    }
 
    return <ProLayout
        title="Admin"
        layout="mix"
        location={location}
        siderMenuType='sub'
        menuItemRender={menuItemRender}
        route={menu}
        avatarProps={{
            icon: <UserOutlined />,
            style: { backgroundColor: '#87d068' },
            render: (_props, dom) => (
                <Dropdown
                    menu={{
                        onClick: (e) => {
                            if (e.key === 'logout') {
                                logout();
                            }
                        },
                        items: [
                            {
                                key: 'logout',
                                label: 'Logout',
                                icon: <LogoutOutlined />,
                            }
                        ]
                    }}>
                    { dom }
                </Dropdown>
            )
        }}
    >
        <Outlet />
    </ProLayout>;
}