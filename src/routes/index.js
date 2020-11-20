import {
    Login,
    Dashboard,
    NotFound,
    Settings,
    UserList,
    UserEdit,
    UserAdd
} from '../components'

export const mainRouter = [{
    pathname: '/login',
    component: Login
}, {
    pathname: '/404',
    component: NotFound
}
];
export const adminRouter = [
    {
        pathname: '/admin/dashboard',
        component: Dashboard
    }, {
        pathname: '/admin/settings',
        component: Settings
    }, {
        pathname: '/admin/user',
        component: UserList,
        exact: true
    }, {
        pathname: '/admin/user/edit/:id',
        component: UserEdit
    }
];