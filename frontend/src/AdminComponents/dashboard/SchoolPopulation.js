import React,  {useState, useEffect} from 'react'
import ComplexDonut from 'react-svg-donuts/dist/complex';
import 'react-svg-donuts/dist/index.css';
import { PieChart } from "react-minimal-pie-chart";


function Population({maleStudents, femaleStudents}) {
    const [students, setstudents] = useState({
        female: 0,
        male: 0,
    })
    const [loading, setloading] = useState(true)

    useEffect(() => {
        if(maleStudents && femaleStudents){
            setloading(false)
            setstudents({
                female:maleStudents,
                male:femaleStudents
             })
        }
    }, [maleStudents, femaleStudents])
   
    return (
        <div className="content__container attendances">
             <h3>Students</h3>
                {/* <PieChart
                    animation
                    animationDuration={500}
                    animationEasing="ease-out"
                    center={[50, 50]}
                    data={[
                        {
                        color: "#E38627",
                        title: "One",
                        value: students?.female,
                        },
                        
                        {
                        color: "#6A2135",
                        title: "Three",
                        value: students?.male,
                        },
                    ]}
                    labelPosition={50}
                    lengthAngle={360}
                    lineWidth={15}
                    paddingAngle={0}
                    radius={50}
                    rounded
                    startAngle={0}
                    viewBoxSize={[100, 100]}
                        /> */}
            {loading ?
             <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                </div>:
                <ComplexDonut
                size={200}
                radius={40}
                segments={[
                    {
                        color: '#ffa201',
                        value:students?.female
                    },
                    {
                        color: '#051f3e',
                        value: students?.male
                    }
                ]}
                thickness={40}
                startAngle={-90}
            />
            }
            <div className="graph__keys row mt-4">
                <div className=" col-sm-5">
                    <div className="color__box female__color"></div>
                    <div className="muted-text">
                        Female Students
                    </div>
                    <h6><strong>{students?.male}</strong></h6>
                </div>
                <div className=" col-sm-5">
                    <div className="color__box male__color"></div>
                    <div className="muted-text">
                        Male Students
                    </div>
                    <h6><strong>{students?.female}</strong></h6>
                </div>
            </div>
       </div>
    )
}

export default Population
