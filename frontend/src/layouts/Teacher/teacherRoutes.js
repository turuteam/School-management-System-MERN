
import React from 'react';

const Dashboard = React.lazy(()  => import( '../../TeachersComponents/dashboard/Index'));

//profile
const EditProfile = React.lazy(()  => import( '../../TeachersComponents/dashboard/EditProfile'));
const Profile = React.lazy(()  => import( '../../TeachersComponents/dashboard/Profile'));
const Payrow =  React.lazy(()  => import( '../../TeachersComponents/dashboard/Payrow'));

//messages
const Attendance = React.lazy(()  => import( '../../TeachersComponents/attendance/Attendance'));


//attendance
const Messages = React.lazy(()  => import( '../../TeachersComponents/message/Messages'));
const MessageAdmin= React.lazy(()  => import( '../../TeachersComponents/message/MessageAdmin'));
const MessageStudent = React.lazy(()  => import( '../../TeachersComponents/message/MessageStudent'));

//settings
const Settings = React.lazy(()  => import( '../../TeachersComponents/settings/SettingsPage'));

//notification
const Notifications = React.lazy(()  => import( '../../TeachersComponents/notifications/Notification'));


//academics
const Classes = React.lazy(()  => import( '../../TeachersComponents/academics/AllClasses'));
const Courses = React.lazy(()  => import( '../../TeachersComponents/academics/AllCourses'));
const CourseDetails = React.lazy(()  => import( '../../TeachersComponents/academics/CourseDetails'));
const Calendar = React.lazy(()  => import( '../../TeachersComponents/academics/Calender'));
const AddCourseNotes = React.lazy(()  => import( '../../TeachersComponents/academics/AddCorseNotes'));



 const routes =  [
    {
        path: "/",
        name: "Dashboard",
        exact: true,
        component: Dashboard,
        layout: "/admin",
    },
    {
        path: "/messages",
        name: "Messages",
        exact: true,
        component: Messages,
    },
    {
        path: "/messages/admin",
        name: "Messages",
        component: MessageAdmin,
    },
    {
        path: "/messages/student",
        name: "Messages",
        component: MessageStudent,
    },
    {
        path: "/messages/:id",
        name: "Messages",
        component: Messages,
    },
    {
        path: "/academics/classes",
        name: "Classes",
        component: Classes,
        exact: true
    },
    {
        path: "/academics/courses",
        name: "Courses",
        exact: true,
        component: Courses,
    },
    {
        path: "/academics/courses/addnotes",
        name: "Courses",
        component: AddCourseNotes,
    },
    {
        path: "/academics/calender",
        name: "Courses",
        exact: true,
        component: Calendar,
    },
    {
        path: "/academics/coursedetail/:id",
        name: "Course Details",
        component: CourseDetails,
    },
    {
        path: "/profile",
        exact: true,
        name: "Course Details",
        component: Profile,
    },
    {
        path: "/profile/edit",
        name: "Course Details",
        component: EditProfile,
    },
    {
        path: "/payrow",
        name: "Course Details",
        component: Payrow,
    },
    {
        path: "/attendance",
        name: "Attendance",
        component: Attendance,
    },
    {
        path: "/settings",
        name: "Settings",
        component: Settings,
    },
    {
        path: "/notifications",
        name: "Notifications",
        component: Notifications,
    }
]

export default routes