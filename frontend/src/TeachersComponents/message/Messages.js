import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Sidebar from '../../components/messages/inbox/Sidebar'
import Message from '../../components/messages/inbox/MessageContainer'
import DefaultView from '../../components/messages/inbox/DefaultView'


function Messages() {
    return (
        <div>
           <div>
           <h3>Inbox Messages</h3>
            <div className=" messages__container ">
                <Sidebar/>
                    <Switch>
                          <Route component={Message} path="/message/:id"  />
                          <Route component={DefaultView} path="/message"  />
                    </Switch>
            </div>
        </div>

        </div>
    )
}

export default Messages
