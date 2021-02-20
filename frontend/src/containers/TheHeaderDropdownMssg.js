import React, {useState, useEffect} from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {getImgSrc, timeStamp, getTrimString, getCapitalize , getIntial} from '../utils';
import axios from '../store/axios';
import {selectUser} from '../store/slices/userSlice';
import { useSelector} from 'react-redux';
import {Avatar} from '@material-ui/core'



const TheHeaderDropdownMssg = () => {
  const user = useSelector(selectUser)
  const [messages, setmessages] = useState([ ])

  useEffect(() => {
    axios.get(`chats/messages/${user?.id}`).then(res => {
      let data = res.data
        data.slice(0,5).sort(function(x, y){
             return y.date - x.date;
        })
        setmessages(data)
    })
    
  }, [user])



  const itemsCount = messages?.length;
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-1"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-envelope-open" />
        {itemsCount > 0 && <CBadge shape="pill" color="info">{itemsCount}</CBadge>}
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
        >
          <strong>You have {itemsCount} messages</strong>
        </CDropdownItem>

        {messages && messages.map(e =>
        <CDropdownItem key={e?._id} href="/messages">
          <div className="message">
            <div className="pt-3 mr-3 float-left">
              <div className="c-avatar">
               < Avatar/>
                <span className="c-avatar-status bg-danger"></span>
              </div>
            </div>
            <div>
              <div className="font-weight-bold text-truncate">{getCapitalize(e?.senderID)}</div>
              <small className="text-muted float-right mt-1">{timeStamp(e?.date)}</small>
              <div className="small text-muted text-truncate"> {getTrimString(e?.message, 100)}  </div>
            </div>
          </div>
        </CDropdownItem>
         )}


        <CDropdownItem href="/messages" className="text-center border-top"><strong>View all messages</strong></CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdownMssg