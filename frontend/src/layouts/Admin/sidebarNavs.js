import React from 'react'
import CIcon from '@coreui/icons-react'

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
            name: 'Attendance',
            to: '/students/attendance',
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
        {
          _tag: 'CSidebarNavItem',
          name: 'Attendance',
          to: '/staff/attendance',
        },
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
    icon: 'cil-puzzle',
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
    name: 'Finance',
    route: '/finance',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Set Fees',
        to: '/finance/set',
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
    name: 'Message',
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
