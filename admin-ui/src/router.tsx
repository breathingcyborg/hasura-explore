import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./auth/pages/login-page";
import { Guest } from "./auth/components/guest";
import { Protected } from "./auth/components/protected";
import { AdminLayout } from "./layout/admin-layout";
import { CreateArticle } from "./articles/pages/create-article";
import { EditArticle } from "./articles/pages/edit-article";
import { ListArticles } from "./articles/pages/list-articles";

const router = createBrowserRouter([
    { 
        path: '/', 
        element: <Guest>
            <LoginPage /> 
        </Guest>
    },
    {
        path: '/admin',
        element: <Protected>
            <AdminLayout />
        </Protected>,
        children: [
            {
                path: 'dashboard',
                element: <div>
                    Dashboard
                </div>
            },
            {
                path: 'articles',
                element: <ListArticles />
            },
            {
                path: 'articles/create',
                element: <CreateArticle />
            },
            {
                path: 'articles/:id/edit',
                element: <EditArticle />
            },
        ]
    }
])

export default router;