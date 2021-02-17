import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {set} from '../store/slices/appSlice'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CSubheader,
  CBreadcrumbRouter
} from '@coreui/react'
import SearchIcon from '@material-ui/icons/Search';
import CIcon from '@coreui/icons-react'
import {selectUser} from '../store/slices/userSlice';

// routes config
import routes from '../routes'

import { 
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif
}  from './index'

const TheHeader = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser);
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    console.log("clicked")
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch(set(val))
  }

  const toggleSidebarMobile = () => {
    console.log("clicked")
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch(set(val))
  }

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
          <form className="nav__search" action="">
             <SearchIcon className="icon"/>
            <input autoFocus={true} type="text" placeholder="Find Something..."/>
          </form>
      </CHeaderNav>

      <CHeaderNav className="px-3 nav__icons">
        <TheHeaderDropdownNotif id={user?.id}/>
        <TheHeaderDropdownMssg id={user?.id}/>
        <TheHeaderDropdown user={user}/>
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-end">
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes} 
        />
      </CSubheader>
    </CHeader>
  )
}

export default TheHeader
