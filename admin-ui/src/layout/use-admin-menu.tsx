import { DashboardOutlined, BookOutlined } from "@ant-design/icons"

export const useAdminMenu = () => {
    // you can filter items by current user role etc.

    const menu = {
        path: '/admin',
        routes: [
            {  
                path: '/admin/dashboard',
                icon: <DashboardOutlined />,
                key: 'dashboard',
                name: 'Dashboard',
            },
            {
                path: '/admin/articles',
                icon: <BookOutlined />,
                key: 'articles',
                name: 'Articles',
                routes: [
                    {
                        path: 'create',
                        hideInMenu: true,
                        name: 'Create Article'
                    },
                    {
                        path: 'edit/:id',
                        hideInMenu: true,
                        name: 'Update Article'
                    },
                ]
            }
        ]
    }

    return menu;
}