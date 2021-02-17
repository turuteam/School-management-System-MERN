import React from 'react'
import CIcon from '@coreui/icons-react'
import BookIcon from '@material-ui/icons/Book';
import PaymentIcon from '@material-ui/icons/Payment';

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Admin Dashboard',
    to: '/',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon sidebarIcon"/>,
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Students',
    route: '/students',
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon  sidebarIcon"/>,
    _children: [
        {
            _tag: 'CSidebarNavItem',
            name: 'All Students',
            to: '/students',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Registration New',
            to: '/students/new',
          },
      
          {
            _tag: 'CSidebarNavItem',
            name: 'Campuses',
            to: '/students/campus',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Dormitories',
            to: '/students/dormitories',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Section',
            to: '/students/section',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'UpGrading',
            to: '/students/upgrade',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Prefects',
            to: '/students/prefects',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Scholarships',
            to: '/students/scholarships',
          },
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Staff',
    route: '/staff',
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon  sidebarIcon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Staff',
        to: '/staff',
      },
      {
          _tag: 'CSidebarNavItem',
          name: 'Add Staff',
          to: '/staff/new',
        },
        // {
        //   _tag: 'CSidebarNavItem',
        //   name: 'Attendance',
        //   to: '/staff/attendance',
        // },
        {
          _tag: 'CSidebarNavItem',
          name: 'Payrow',
          to: '/staff/finance',
        }
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Academics',
    route: '/academics',
    icon:  <CIcon name="cil-paperclip" customClasses="c-sidebar-nav-icon sidebarIcon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Classes',
        to: '/academics/classes',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Courses',
        to: '/academics/courses',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'School Calender',
        to: '/academics/calender',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Notes',
        to: '/academics/notes',
      }
    
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Attendance',
    route: '/attendance',
    icon: <CIcon name="cil-notes" customClasses="c-sidebar-nav-icon sidebarIcon"/> ,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Students Attendance History',
        to: '/attendance/students',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Staff Attendance History',
        to: '/attendance/staff',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register Students Attendance',
        to: '/attendance/students/register',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register Staff Attendance',
        to: '/attendance/staff/register',
      }
    
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Finance',
    route: '/finance',
    icon:  <CIcon name="cil-notes" customClasses="c-sidebar-nav-icon sidebarIcon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: ' Fees',
        to: '/finance/fees',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Prepare bill',
        to: '/finance/preparebill',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Bill Payment',
        to: '/finance/billpayment',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Transactions',
        to: '/finance/viewpayment',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Banking',
        to: '/finance/banking',

      }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Canteen',
    to: '/canteen',
    icon:  <CIcon name="cil-notes" customClasses="c-sidebar-nav-icon sidebarIcon"/>,
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Message',
    route: '/messages',
    icon: <CIcon name="cil-chat-bubble" customClasses="c-sidebar-nav-icon sidebarIcon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Inbox',
        to: '/messages',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Message Students',
        to: '/messages/students',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Message Staff',
        to: '/messages/staff',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Message Guadian',
        to: '/messages/guadian',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Bulk/Group Message',
        to: '/messages/group',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Bill Reminder',
        to: '/messages/billreminder',
      }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Notifications',
    to: '/notifications',
    icon:<CIcon name="cil-bell" customClasses="c-sidebar-nav-icon sidebarIcon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Account Settings',
    to: '/settings',
    icon: <CIcon name="cil-settings" customClasses="c-sidebar-nav-icon sidebarIcon"/>
  },
  
  
]

export default _nav
