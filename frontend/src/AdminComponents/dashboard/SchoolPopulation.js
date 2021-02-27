import React, { useState, useEffect } from "react";
import ComplexDonut from "react-svg-donuts/dist/complex";
import "react-svg-donuts/dist/index.css";

function Population({ maleStudents, femaleStudents }) {
  const [students, setstudents] = useState({
    female: 0,
    male: 0,
  });
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    if (maleStudents && femaleStudents) {
      setstudents({
        female: maleStudents,
        male: femaleStudents,
      });
      setloading(false);
    }
  }, [maleStudents, femaleStudents]);

  return (
    <div className="content__container attendances">
      <h3>Students</h3>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <ComplexDonut
          size={200}
          radius={40}
          segments={[
            {
              color: "#051f3e",
              value: students?.female,
            },
            {
              color: "#ffa201",
              value: students?.male,
            },
          ]}
          thickness={40}
          startAngle={-90}
        />
      )}
      <div className="graph__keys row mt-4">
        <div className=" col-sm-5">
          <div className="color__box female__color"></div>
          <div className="muted-text">Female Students</div>
          <h6>
            <strong>{students?.male}</strong>
          </h6>
        </div>
        <div className=" col-sm-5">
          <div className="color__box male__color"></div>
          <div className="muted-text">Male Students</div>
          <h6>
            <strong>{students?.female}</strong>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Population;
