
import React from 'react';

const Dashboard = React.lazy(()  => import( '../../AdminComponents/dashboard/Index'));
const Settings = React.lazy(()  => import( '../../AdminComponents/settings/SettingsPage'));
const Notifications = React.lazy(()  => import( '../../AdminComponents/notifications/NotificationsPage'));


//message
const Messages = React.lazy(()  => import( '../../AdminComponents/messages/inbox/Messaging'));
const GuadianMessages = React.lazy(()  => import( '../../AdminComponents/messages/GuadianMessage'));
const StaffMessages = React.lazy(()  => import( '../../AdminComponents/messages/StaffMessage'));
const StudentMessage = React.lazy(()  => import( '../../AdminComponents/messages/StudentMessage'));
const BillReminder = React.lazy(()  => import( '../../AdminComponents/messages/BillReminder'));
const BulkMessages = React.lazy(()  => import( '../../AdminComponents/messages/BulkMessage'));


//academics
const Calender = React.lazy(()  => import( '../../AdminComponents/academics/calender/Calender'));
const AddCalenderEvent = React.lazy(()  => import( '../../AdminComponents/academics/calender/AddEventCalender'));
const EditCalenderEvent = React.lazy(()  => import( '../../AdminComponents/academics/calender/EditCalenderEvent'));
const Classes = React.lazy(()  => import( '../../AdminComponents/academics/classes/Classes'));
const AddClass = React.lazy(()  => import( '../../AdminComponents/academics/classes/AddClass'));
const EditClass = React.lazy(()  => import( '../../AdminComponents/academics/classes/EditClass'));
const Courses = React.lazy(()  => import( '../../AdminComponents/academics/courses/Courses'));
const AddCourse = React.lazy(()  => import( '../../AdminComponents/academics/courses/AddCourses'));
const EditCourse = React.lazy(()  => import( '../../AdminComponents/academics/courses/EditCourse'));
const Notes = React.lazy(()  => import( '../../AdminComponents/academics/notes/Notes'));
const AddNote = React.lazy(()  => import( '../../AdminComponents/academics/notes/AddNote'));
const EditNote = React.lazy(()  => import( '../../AdminComponents/academics/notes/EditNote'));



//students
const AllStudents = React.lazy(()  => import( '../../AdminComponents/students/allStudents/AllStudents'));
const Upgrade = React.lazy(()  => import( '../../AdminComponents/students/Upgrade'));
const Attendance = React.lazy(()  => import( '../../AdminComponents/students/attendance/Attendance'));
const Campuses = React.lazy(()  => import( '../../AdminComponents/students/campuses/Campuses'));
const Dormitories = React.lazy(()  => import( '../../AdminComponents/students/dormitories/Dormitories'));
const NewStudent = React.lazy(()  => import( '../../AdminComponents/students/newStudent/NewStudent'));
const Prefects = React.lazy(()  => import( '../../AdminComponents/students/prefects/Prefects'));
const Scholarships = React.lazy(()  => import( '../../AdminComponents/students/schoolarship/Scholarships'));
const StudentDetails = React.lazy(()  => import( '../../AdminComponents/students/studentDetails/StudentDetails'));
const EditStudent = React.lazy(() => import('../../AdminComponents/students/newStudent/EditStudent'));



//staff
const AddStaff = React.lazy(()  => import( '../../AdminComponents/staff/addStaff/AddStaffPage'));
const Staff = React.lazy(()  => import( '../../AdminComponents/staff/AllStaff'));
const StaffAttendance = React.lazy(()  => import( '../../AdminComponents/staff/Attendence'));
const StaffDetails = React.lazy(() => import('../../AdminComponents/staff/StaffDetails'));
const Payrow = React.lazy(()  => import( '../../AdminComponents/staff/PayrowPage'));



//finance
const Banking = React.lazy(()  => import( '../../AdminComponents/finance/banking/Banking'));
const SetFees = React.lazy(()  => import( '../../AdminComponents/finance/setfees/SetFees'));
const PrepareBill = React.lazy(()  => import( '../../AdminComponents/finance/PrepareBill'));
const NonBillPayment = React.lazy(()  => import( '../../AdminComponents/finance/NonBillPayment'));
const BillPayment = React.lazy(()  => import( '../../AdminComponents/finance/BillPayment'));
const ViewPayment = React.lazy(()  => import( '../../AdminComponents/finance/ViewPayment'));


//canteen 
const Canteen = React.lazy(() => import('../../AdminComponents/canteen/CanteenPayment'));
const AddPayent = React.lazy(() => import('../../AdminComponents/canteen/AddCanteenPayment'));
const EditPayment = React.lazy(() => import('../../AdminComponents/canteen/AddCanteenPayment'));

 const routes =  [
    {
        path: "/",
        name: "Dashboard",
        exact: true,
        component: Dashboard,
    },
    {
        path: "/academics/calender",
        name: "Calendar",
        exact: true,
        component: Calender,   
    },
    {
        path: "/academics/calender/add",
        name: "Add Calendar",
        component: AddCalenderEvent,   
    },
    {
        path: "/academics/calender/edit/:id",
        name: "Edit Calendar",
        component: EditCalenderEvent,   
    },
    {
        path: "/academics/classes",
        name: "Classes",
        exact: true,
        component: Classes,   
    },
    {
        path: "/academics/classes/add",
        name: "Classes",
        component: AddClass,   
    },
    {
        path: "/academics/classes/edit/:id",
        name: "Classes",
        component: EditClass,   
    },
    {
       
        path: "/academics/courses",
        name: "Courses",
        exact: true,
        component: Courses,   
    },
    {
       
        path: "/academics/courses/add",
        name: "Add Courses",
        component: AddCourse   
    },
    {
       
        path: "/academics/courses/edit/:id",
        name: "Edit Courses",
        component: EditCourse,   
    },
    {
        path: "/academics/notes",
        name: "Notes",
        exact: true,
        component: Notes,
    },
    {
        path: "/academics/notes/add",
        name: "Add Note",
        component: AddNote,
    },
    {
        path: "/academics/notes/edit/:id",
        name: "Edit Note",
        component: EditNote,
    },
    {
        path: "/students",
        name: "Students",
        exact: true,
        component: AllStudents,
    },
    {
        path: "/students/attendance",
        name: "Attendance",
        component: Attendance,
    },
    {
        path: "/students/campus",
        name: "Campuses",
        component: Campuses,
    },
    {
        path: "/students/dormitories",
        name: "Dormitories",
        component: Dormitories,
    },
    {
        path: "/students/new",
        name: "New Student",
        component: NewStudent,
    },
    {
        path: "/students/edit/:id",
        name: "Edit Student",
        component: EditStudent,
    },
    {
        path: "/students/prefects",
        name: "Prefects",
        component: Prefects,
    },
    {
        path: "/students/upgrade",
        name: "Upgrade",
        component: Upgrade,
    },
    {
        path: "/students/scholarships",
        name: "Scholarships",
        component: Scholarships
    },
    {
        path: "/students/:id",
        name: "Student Details ",
        component: StudentDetails,
    },
    {
        path: "/staff",
        name: "All Staff ",
        exact: true,
        component: Staff,
    },
    {
        path: "/staff/new",
        name: "New Staff ",
        component: AddStaff,
    },
    {
        path: "/staff/attendance",
        name: "Staff Attendance ",
        component: StaffAttendance,
    },
    {
        path: "/staff/finance",
        exact: true,
        name: "Staff Payrow ",
        component: Payrow,
    },
    {
        path: "/staff/:id",
        name: "Staff Details ",
        component: StaffDetails,
    },
  
    {
        path: "/finance/set",
        name: "Set Fees",
        component: SetFees
    },
    {
        path: "/finance/preparebill",
        name: "Prepare Bill",
        component: PrepareBill
    },
    {
        path: "/finance/billpayment",
        name: "Bill Payment",
        component: BillPayment
    },
    {
        path: "/finance/banking",
        name: "Banking",
        component: Banking
    },
    {
        path: "/finance/nonbillpayment",
        name: "Non Bill Payment",
        component: NonBillPayment
    },
    {
        path: "/finance/viewpayment",
        name: "View Payment",
        component: ViewPayment
    },
    {
        path: "/canteen",
        exact: true,
        name: "canteen",
        component: Canteen
    },
    {
        path: "/canteen/addpayment",
        name: "canteen",
        component: AddPayent
    },
    {
        path: "/canteen/editpayment/:id",
        name: "canteen",
        component: EditPayment
    },
    {
        path: "/messages",
        exact: true,
        name: "Messages",
        component: Messages
    },
    {
        path: "/message/:id",
        name: "Message",
        component: Messages
    },
    {
        path: "/messages/students",
        exact: true,
        name: "Student Messages",
        component: StudentMessage
    },
    {
        path: "/messages/staff",
        name: "Staff Messages",
        exact: true,
        component: StaffMessages
    },
    {
        path: "/messages/guadian",
        name: "Guadian Messages",
        exact: true,
        component: GuadianMessages
    },
    {
        path: "/messages/billreminder",
        name: "Bill Reminder",
        exact: true,
        component: BillReminder
    },
    {
        path: "/messages/group",
        name: "Group Message",
        exact: true,
        component: BulkMessages
    },
    
    {
        path: "/notifications",
        name: "Notifications",
        component: Notifications,
    },
    {
        path: "/settings",
        name: "Acoount Settings",
        component: Settings,
    },
]

export default routes