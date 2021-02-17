
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


const Campuses = React.lazy(()  => import( '../../AdminComponents/students/campuses/Campuses'));
const Dormitories = React.lazy(()  => import( '../../AdminComponents/students/dormitories/Dormitories'));
const NewStudent = React.lazy(()  => import( '../../AdminComponents/students/newStudent/NewStudent'));
const Prefects = React.lazy(()  => import( '../../AdminComponents/students/prefects/Prefects'));
const Section =  React.lazy(()  => import( '../../AdminComponents/students/section/Section'));
const Scholarships = React.lazy(()  => import( '../../AdminComponents/students/schoolarship/Scholarships'));
const StudentDetails = React.lazy(()  => import( '../../AdminComponents/students/studentDetails/StudentDetails'));
const EditStudent = React.lazy(() => import('../../AdminComponents/students/newStudent/EditStudent'));
const RegisterAttendance =  React.lazy(()  => import( '../../AdminComponents/students/attendance/RegisterAttendance'));


//staff
const AddStaff = React.lazy(()  => import( '../../AdminComponents/staff/addStaff/AddStaffPage'));
const Staff = React.lazy(()  => import( '../../AdminComponents/staff/AllStaff'));


const StaffDetails = React.lazy(() => import('../../AdminComponents/staff/StaffDetails'));
const Payrow = React.lazy(()  => import( '../../AdminComponents/staff/PayrowPage'));
const EditStaff  =  React.lazy(()  => import( '../../AdminComponents/staff/addStaff/EditStaff'));



//finance
const Banking = React.lazy(()  => import( '../../AdminComponents/finance/banking/Banking'));
const AddBank = React.lazy(()  => import( '../../AdminComponents/finance/banking/AddBank'));
const EditBank = React.lazy(()  => import( '../../AdminComponents/finance/banking/EditBank'));
const BankTransactions = React.lazy(()  => import( '../../AdminComponents/finance/banking/TrankingTransaction'));


const Fees = React.lazy(()  => import( '../../AdminComponents/finance/setfees/SetFees'));
const SetFees = React.lazy(()  => import( '../../AdminComponents/finance/setfees/SetNewFees'));
const PrepareBill = React.lazy(()  => import( '../../AdminComponents/finance/PrepareBill'));
const NonBillPayment = React.lazy(()  => import( '../../AdminComponents/finance/NonBillPayment'));
const BillPayment = React.lazy(()  => import( '../../AdminComponents/finance/BillPayment'));
const ViewPayment = React.lazy(()  => import( '../../AdminComponents/finance/ViewPayment'));


//canteen 
const Canteen = React.lazy(() => import('../../AdminComponents/canteen/CanteenPayment'));
const AddPayent = React.lazy(() => import('../../AdminComponents/canteen/AddCanteenPayment'));
const CanteenMembers = React.lazy(() => import('../../AdminComponents/canteen/Members'));
const EditPayment = React.lazy(() => import('../../AdminComponents/canteen/AddCanteenPayment'));
const RegisterCanteen = React.lazy(() => import('../../AdminComponents/canteen/RegisterMember'));
const EditMember = React.lazy(() => import('../../AdminComponents/canteen/EditMember'));

//attendance 
const StudentsAttendanceHistory = React.lazy(() => import('../../AdminComponents/attendance/StudentAttendance/StudentsAttendanceHistory'));
const StudentAttendanceRegister =  React.lazy(() => import('../../AdminComponents/attendance/StudentAttendance/StudentsAttendanceRegister'));
const StaffAttendanceHistory =  React.lazy(() => import('../../AdminComponents/attendance/StaffAttendance/StaffAttendanceHistory'));
const StaffAttendanceRegister = React.lazy(() => import('../../AdminComponents/attendance/StaffAttendance/StaffAttendanceRegister'));
const EditStudentAttendance =  React.lazy(() => import('../../AdminComponents/attendance/StudentAttendance/EditAttendance'));
const EditStaffAttendance = React.lazy(() => import('../../AdminComponents/attendance/StaffAttendance/EditStaffAttendance'));

 const routes =  [
    {
        path: "/",
        name: "Dashboard",
        exact: true,
        component: Dashboard,
    },
    {
        path: "/attendance/students",
        name: "Attendance Students",
        exact: true,
        component:  StudentsAttendanceHistory,   
    },
    {
        path: "/attendance/staff",
        name: "Attendance Staff",
        exact: true,
        component:  StaffAttendanceHistory,   
    },
    {
        path: "/attendance/students/register",
        name: "Attendance Students Register",
        component:  StudentAttendanceRegister,   
    },
    {
        path: "/attendance/students/edit/:classID/:id",
        name: "Attendance Students Register",
        component:  EditStudentAttendance,   
    },
    {
        path: "/attendance/staff/register",
        name: "Attendance Staff Register",
        component:  StaffAttendanceRegister,   
    },
    {
        path: "/attendance/staff/edit/:id",
        name: "Attendance Staff Register",
        component:  EditStaffAttendance,   
    },
    {
        path: "/academics/calender",
        name: "Calendar",
        exact: true,
        component: Calender,   
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
        path: "/students/attendance/register",
        name: "Attendance Register",
        component: RegisterAttendance
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
        path: "/students/section",
        name: "Section",
        component: Section,
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
        path: "/staff/finance",
        exact: true,
        name: "Staff Payrow ",
        component: Payrow,
    },
    {
        path: "/staff/edit/:id",
        name: "Edit staff",
        component: EditStaff
    },
    {
        path: "/staff/:id",
        name: "Staff Details ",
        component: StaffDetails,
    },
    {
        path: "/finance/fees",
        name: "Fees",
        exact: true,
        component: Fees
    },
  
    {
        path: "/finance/fees/set",
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
        exact: true,
        component: Banking
    },
    {
        path: "/finance/banking/add",
        name: "Banking Add",
        component: AddBank
    },
    {
        path: "/finance/banking/edit/:id",
        name: "Banking Edit",
        component: EditBank
    },
    {
        path: "/finance/banking/transaction/:id",
        name: "Banking Transaction",
        component: BankTransactions
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
        path: "/canteen/members",
        exact: true,
        name: "canteen",
        component: CanteenMembers
    },
    {
        path: "/canteen/members/register",
        name: "canteen",
        component: RegisterCanteen
    },
    {
        path: "/canteen/members/edit/:id",
        name: "canteen",
        component: EditMember
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