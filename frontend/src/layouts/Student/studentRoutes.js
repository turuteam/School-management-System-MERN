
import React from 'react';

const Dashboard = React.lazy(()  => import( '../../StudentComponents/dashboard/Index'));
const Profile =   React.lazy(()  => import( '../../StudentComponents/profile/ProfilePage'));
const EditProfile =   React.lazy(()  => import( '../../StudentComponents/profile/EditProfilePage'));
const Fees =   React.lazy(()  => import( '../../StudentComponents/finances/FeesPage'));
const Class =   React.lazy(()  => import( '../../StudentComponents/classes/Classes'));
const Courses =   React.lazy(()  => import( '../../StudentComponents/classes/CoursesPage'));
const Calendar=   React.lazy(()  => import( '../../StudentComponents/classes/CalendarPage'));
const Attendance =   React.lazy(()  => import( '../../StudentComponents/attendence/AttendancePage'));


const Messages =   React.lazy(()  => import( '../../StudentComponents/messages/Messages'));
const MessageAdmin = React.lazy(() => import('../../StudentComponents/messages/MessageAdmin'));
const MessageTeacher = React.lazy(() => import('../../StudentComponents/messages/MessageTeacher'));
//const MessageChat = React.lazy(() => import('../../StudentComponents/messages/Messages'));

const Notifications =   React.lazy(()  => import( '../../StudentComponents/notifications/NotificationsPage'));
const Settings =   React.lazy(()  => import( '../../StudentComponents/settings/SettingsPage'));




 const routes =  [
    {
        path: "/",
        name: "Dashboard",
        exact: true,
        component: Dashboard,
    },
    {
        path: "/profile",
        name: "Profile",
        exact: true,
        component: Profile,
    },
    {
        path: "/profile/edit/:id",
        name: "Edit Profile",
        component: EditProfile,   
    },
    {
        path: "/academics/class",
        name: "Class",
        component: Class
    },
    {
        path: "/academics/course",
        name: "Courses",
        component: Courses
    },
    {
        path: "/academics/calendar",
        name: "Calendar",
        component: Calendar
    },
    {
        path: "/fees",
        name: "Fees",
        component: Fees
    },
    {
        path: "/attendance",
        name: "Attendance",
        component: Attendance
    },
    {
        path: "/notifications",
        name: "Notifications",
        component: Notifications
    },
    {
        path: "/settings",
        name: "Settings",
        component: Settings
    },
    {
        path: "/message",
        name: "Messages",
        exact: true,
        component: Messages,
    },
    {
        path: "/message/admin",
        name: "Messages",
        exact: true,
        component: MessageAdmin,

    },
    {
        path: "/message/teacher",
        name: "Messages",
        exact: true,
        component: MessageTeacher,
        
    },
    {
        path: "/message/:id",
        name: "Messages",
        component: Messages,
    },
]

export default routes