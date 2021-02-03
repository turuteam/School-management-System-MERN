import React from 'react'
import ComplexDonut from 'react-svg-donuts/dist/complex';
import 'react-svg-donuts/dist/index.css';
import Divider from '@material-ui/core/Divider';

function Population() {
    return (
        <div className="content__container attendances">
             <h3>Students</h3>
                <ComplexDonut
                size={200}
                radius={80}
                segments={[
                    {
                        color: '#ffa201',
                        value: 45000
                    },
                    {
                        color: '#051f3e',
                        value: 33000
                    }
                ]}
                thickness={40}
                startAngle={-90}
            />
            <div className="graph__keys row mt-4">
                <div className=" col-sm-5">
                    <div className="color__box female__color"></div>
                    <div className="muted-text">
                        Female Students
                    </div>
                    <h6><strong>45000</strong></h6>
                </div>
                {/* <Divider orientation="vertical" flexItem  className="col-sm-2"/> */}
                <div className=" col-sm-5">
                    <div className="color__box male__color"></div>
                    <div className="muted-text">
                        Male Students
                    </div>
                    <h6><strong>33000</strong></h6>
                </div>
            </div>
       </div>
    )
}

export default Population
