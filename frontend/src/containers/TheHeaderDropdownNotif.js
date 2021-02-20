import React, {useState, useEffect} from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import moment from 'moment';
import axios from '../store/axios'

const TheHeaderDropdownNotif = () => {
  const [items, setitems] = useState([])


  useEffect(() => {
      axios.get('/notification/upcoming').then(res => {
          setitems(res.data);
          console.log(res.data)
      })
  }, [])

  
  
  let itemsCount = items?.length
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-1"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-bell"/>
           {itemsCount > 0 && <CBadge shape="pill" color="danger">{itemsCount}</CBadge>}
        {/* <CBadge shape="pill" color="danger">{itemsCount}</CBadge> */}
      </CDropdownToggle>
      <CDropdownMenu  placement="bottom-end" className="pt-0">
        <CDropdownItem
          header
          tag="div"
          className="text-center"
          color="light"
        >
          <strong>You have {itemsCount} notifications</strong>
        </CDropdownItem>
        {items && items.map(e =>  
        <>
        <CDropdownItem key={e._id}>
            <CIcon name="cil-bell" className="mr-2 text-success" /> 
              <div> {e?.title} <br/> <small className="mr-2">{moment(e?.createdAt).startOf().fromNow()}</small></div> <br/> 
            <hr/>
          </CDropdownItem> </>)}
       
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdownNotif