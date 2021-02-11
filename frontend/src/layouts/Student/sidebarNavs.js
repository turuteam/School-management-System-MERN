import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Student Dashboard',
    route: '/',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon sidebarIcon"/>,
    _children: [
         {
            _tag: 'CSidebarNavItem',
            name: 'My Profile',
            to: '/profile',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Edit Profile',
            to: '/profile/edit/:id',
          }
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Academics',
    route: '/students',
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon  sidebarIcon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Class',
        to: '/academics/class',
      },
       {
          _tag: 'CSidebarNavItem',
          name: 'Courses',
          to: '/academics/course',
        },
        {
            _tag: 'CSidebarNavItem',
            name: 'Calendar',
            to: '/academics/calendar',
          }
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Finances',
    route: '/finances',
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon  sidebarIcon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Fees',
        to: '/fees',
      },
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Attendance',
    to: '/attendance',
    icon: <CIcon name="cil-calculator" customClasses="c-sidebar-nav-icon  sidebarIcon"/>,
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Messages',
    route: '/messages',
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon  sidebarIcon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Inbox',
        to: '/message',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Message School Admin',
        to: '/message/admin',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Message  Teacher',
        to: '/message/teacher',
      },
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Notifications',
    to: '/notifications',
    icon: <CIcon name="cil-bell" customClasses="c-sidebar-nav-icon  sidebarIcon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Account Settings',
    to: '/settings',
   icon: <CIcon name="cil-calculator" customClasses="c-sidebar-nav-icon  sidebarIcon"/>,
  },
  
  
]

export default _nav
