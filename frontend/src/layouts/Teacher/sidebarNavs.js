import React from 'react'
import CIcon from '@coreui/icons-react';


const _nav =  [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Teacher Dashboard',
    route: '/admin',
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
            to: '/profile/edit',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Payrow',
            to: '/payrow',
          }
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Academics',
    route: '/academics',
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon  sidebarIcon"/>,
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
          }
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Attendences',
    to: '/attendance',
    icon: 'cil-calculator',
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Message',
    route: '/messages',
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon  sidebarIcon"/>,
    _children: [
        {
            _tag: 'CSidebarNavItem',
            name: 'Inbox',
            to: '/messages',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Message School Admin',
            to: '/messages/admin',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Message Student',
            to: '/messages/student',
          },  
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Messages',
    to: '/messages',
    icon: 'cil-calculator',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Notifications',
    to: '/notifications',
    icon: 'cil-calculator',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Account Settings',
    to: '/settings',
    icon: 'cil-calculator',
  },
  
  
]

export default _nav
