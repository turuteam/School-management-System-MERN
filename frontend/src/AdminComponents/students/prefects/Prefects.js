import React from 'react';
import AddPrefect from './AddPrefect';
import PrefectsList from './PrefectsList';

function Prefects() {
    const prefects = [
        {id: "123", name: "James Bond",posistion: "Head Boy",  added: "21-Jan-2021 07:49pm", },
        {id: "124", name: "Sarah Jackeson",position: "Head Girl", added: "21-Jan-2021 07:49pm"},
        {id: "125", name: "Peter Matthew", position: "Vice Head Boy", added: "21-Jan-2021 07:49pm"},
        {id: "126", name: "Mary King",position: "Vice Head Girl", added: "21-Jan-2021 07:49pm"},
        {id: "127", name: "Anna Peter", position: "Perfect", added: "21-Jan-2021 07:49pm"}
    ]
    return (
        <div className="dormotories__page">
            <h3>Prefects</h3>
            <div className="row">
                <div className="col-sm-12 col-md-5">
                     <AddPrefect/>
                </div>
                <div className="col-sm-12 col-md-7">
                   <PrefectsList prefects={prefects}/>
                </div>
            </div>
        </div>
    )
}

export default Prefects
