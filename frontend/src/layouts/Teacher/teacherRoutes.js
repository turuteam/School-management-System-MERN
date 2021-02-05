
import React from 'react';

const Dashboard = React.lazy(()  => import( '../../AdminComponents/dashboard/Index'));
//const Students = React.lazy(()  => import( '../../AdminComponents/students/Index'));
//const Teachers = React.lazy(()  => import( '../../AdminComponents/staff/Index'));
const Finances = React.lazy(()  => import( '../../AdminComponents/finance/Index'));
const Messages = React.lazy(()  => import( '../../AdminComponents/messages/Index'));
//const Academics = React.lazy(()  => import( '../../AdminComponents/academics/Index'));



 const routes =  [
    {
        path: "/admin",
        name: "Dashboard",
        exact: true,
        component: Dashboard,
        layout: "/admin",
    },
    // {
    //     path: "/admin/students",
    //     name: "Students",
    //     route: '/students',
    //     component: Students,
    //},
    // {
    //     path: "/admin/teachers",
    //     name: "Staff",
    //     component: Teachers,
    //     layout: "/admin"
        
    // },
    // {
    //     path: "/admin/academics",
    //     name: "Academics",
    //     component: Academics,
    //     layout: "/admin"
    // },
    {
        path: "/admin/Finance",
        name: "Finance",
        component: Finances,
        layout: "/admin"
    },
    {
        path: "/admin/messages",
        name: "Messages",
        component: Messages,
        layout: "/admin"
    },
]

export default routes