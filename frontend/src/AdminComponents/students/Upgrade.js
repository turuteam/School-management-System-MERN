import React, { useState } from 'react';
import { selectClasses, selectDormitories, selectCampuses} from '../../store/slices/schoolSlice';
import {useSelector} from 'react-redux';
import axios from '../../store/axios'
import {errorAlert, successAlert} from '../../utils'

function Upgrade() {
    const classes = useSelector(selectClasses);
    const dormitories = useSelector(selectDormitories);
    const campuses = useSelector(selectCampuses);
    const [currentclass, setcurrentclass] = useState("");
    const [nextclass, setnextclass] = useState("");
    const [currentdormitories, setcurrentdormitories] = useState("");
    const [nextdormitories, setnextdormitories] = useState("");
    const [currentcampus, setcurrentcampus] = useState("");
    const [nextcampus, setnextcampus] = useState("");
    const [loading, setloading] = useState({
        classes: false,
        dormitories: false,
        campuses: false,
    })
    const [errors, seterrors] = useState({
        classes: false,
        dormitories: false,
        campuses: false,
    })

    const handleChangeClasses = (e) => {
        e.preventDefault()
        seterrors({...errors, classes: false});
        if(currentclass === "" || nextclass === ""){
            seterrors({...errors, classes: true});
            return 0
        }
        else{
            setloading({...loading, classes: true});
            axios.post('/students/upgrade/class', {currentclass, nextclass})
            .then(res => {
                setloading({...loading, classes: false})
                if(res.data.error){
                     errorAlert(res.data.error);
                     return 0
                }
                successAlert("Changes are successfully done")
                setcurrentclass("");
                setnextclass("");
            }).catch(err => {
                console.log(err);
                setloading({...loading, classes: false})
                errorAlert("something went wrong");
            })
        }
    }

    const handleChangeCampuse = (e) => {
        e.preventDefault()
        seterrors({...errors, classes: false});
        if(currentcampus === "" || nextcampus === ""){
            seterrors({...errors, campuses: true});
            return 0
        }
        else{
            setloading({...loading, classes: true});
            axios.post('/students/upgrade/campus', {currentcampus, nextcampus})
            .then(res => {
                setloading({...loading, campuses: false})
                if(res.data.error){
                     errorAlert(res.data.error);
                     return 0
                }
                successAlert("Changes are successfully done")
                setcurrentcampus("");
                setnextcampus("");
            }).catch(err => {
                console.log(err);
                setloading({...loading, campuses: false})
                errorAlert("something went wrong");
            })
        }
    }

    const handleChangeDormitories = (e) => {
        e.preventDefault()
        seterrors({...errors, dormitories: false});
        if(currentdormitories === "" || nextdormitories === ""){
            seterrors({...errors, dormitories: true});
            return 0
        }
        else{
            setloading({...loading, dormitories: true});
            axios.post('/students//upgrade/dormitories', {currentdormitories, nextdormitories})
            .then(res => {
                setloading({...loading, dormitories: false})
                if(res.data.error){
                     errorAlert(res.data.error);
                     return 0
                }
                successAlert("Changes are successfully done")
                setcurrentdormitories("");
                setnextdormitories("");
            }).catch(err => {
                console.log(err);
                setloading({...loading, dormitories: false})
                errorAlert("something went wrong");
            })
        }
    }



    const handleCancelClass = (e) =>{
        e.preventDefault()
         setcurrentclass("");
         setnextclass("")
         seterrors({...errors, classes: false})
    }

    const handleCancelDormitories = (e) =>{
        e.preventDefault()
        setcurrentdormitories("")
        setnextdormitories("")
        seterrors({...errors, dormitories: false})
    }

    const handleCancelCampus = (e) =>{
        e.preventDefault()
        setcurrentcampus("")
        setnextcampus("")
        seterrors({...errors, campuses: false})
    }


    return (
        <div >
            <h3 className="mb-5">Student Promotion</h3>
            <form  className="content__container mb-5">
                <div className="row mb-5 aligh-items-center" >
                      <div className="col-12 ">
                         <h3  className="mb-4">Promoting Students to the next Class</h3>
                     </div>
                     <div className="col-xs-12 col-sm-6   mb-2">
                         <label htmlFor="">Current Class</label>
                         <select    
                                name="class"
                                value={currentclass}
                                onChange={e => setcurrentclass(e.target.value)}   
                                className="form-select" 
                                aria-label="Default select example">
                                <option  defaultValue  hidden >select</option>
                                {classes?.length > 0 ? classes.map(e =>  <option key={e.classCode} value={e.classCode}> {e.name} </option>)
                                : <option disabled>No options yet</option>}
                        </select>
                     </div>
                     <div className="col-xs-12 col-sm-6   mb-2">
                         <label htmlFor="">Promote Class</label>
                         <select    
                                name="class"  
                                value={nextclass} 
                                onChange={e => setnextclass(e.target.value)}
                                className="form-select" 
                                aria-label="Default select example">
                                <option  defaultValue  hidden >select</option>
                                {classes?.length > 0 ? 
                                classes.map(e =>  <option key={e.classCode} value={e.classCode}> {e.name} </option>)
                              : <option disabled>No options yet</option>}
                                
                            </select>
                     </div>
                     {errors.classes && <div className="text-danger"> Please select all field </div>}
                     <div className="col-xs-12 col-sm-6   mb-2 mt-4">
                            <button 
                            disabled={loading.classes}
                            className="btn blue__btn mr-3" 
                            onClick={handleChangeClasses}>Save Changes</button>
                            <button className="btn btn-danger" onClick={handleCancelClass}>Cancel</button>
                     </div>
                   </div> 
                </form>  


                <form className="content__container mb-5"> 
                   <div className="row mb-5 aligh-items-center" >
                     <div className="col-12 ">
                        <h3  className="mb-4">Promoting Students to another Campus</h3>
                    </div>
                     <div className="col-xs-12 col-sm-6 ">
                         <label htmlFor="">Current Campus</label>
                         <select    
                                name="campus"
                                value={currentcampus}  
                                onChange={e => setcurrentcampus(e.target.value)} 
                                className="form-select" 
                                aria-label="Default select example">
                                <option  defaultValue  hidden >select</option>
                                {campuses.length > 0 ?  
                                   campuses.map(campus => 
                                     <option value={campus._id} key={campus._id} >
                                         {campus.name}
                                    </option>)
                                : <option disabled>No options yet</option>}
                            </select>
                      </div>
                     <div className="col-xs-12 col-sm-6 ">
                         <label htmlFor="">Promote Campus</label>
                         <select    
                                name="nextcampus" 
                                value={nextcampus}
                                onChange={e => setnextcampus(e.target.value)}  
                                className="form-select" 
                                aria-label="Default select example">
                                <option  defaultValue  hidden >select</option>
                                {campuses.length > 0 ? 
                                campuses.map(campus => 
                                <option value={campus._id} key={campus._id} >
                                    {campus.name}
                                    </option>)
                                    : <option disabled>No options yet</option>}
                            </select>
                      </div>
                      {errors.campuses && <div className="text-danger"> Please select all field </div>}
                      <div className="col-xs-12 col-sm-6   mb-2 mt-4">
                            <button 
                            disabled={loading.campuses} 
                            className="btn blue__btn mr-3" 
                            onClick={handleChangeCampuse} >Save Changes</button>
                            <button className="btn btn-danger" onClick={handleCancelCampus}>Cancel</button>
                     </div>
                    </div>
                </form>


                 <form action="" className="content__container mb-5">
                     <div className="row mb-5 aligh-items-center" >
                     <div className="col-12 ">
                        <h3  className="mb-4">Promoting Students  to another Dormitories</h3>
                    </div>
                     <div className="col-xs-12 col-sm-6 ">
                         <label htmlFor="">Current Dormitory</label>
                         <select    
                                name="dormitories" 
                                value={currentdormitories}  
                                onChange={e => setcurrentdormitories(e.target.value)}
                                className="form-select" 
                                aria-label="Default select example">
                                <option  defaultValue  hidden >select</option>
                               {dormitories.length > 0 ? 
                                dormitories.map(e => 
                                <option value={e._id} key={e._id}>{e.name}</option>)
                             :<option disabled>No options yet</option>}
                        </select>
                     </div>
                     <div className="col-xs-12 col-sm-6 ">
                         <label htmlFor="">Promote Dormitory</label>
                          <select    
                                name="nextdormitory"
                                value={nextdormitories}   
                                onChange={e => setnextdormitories(e.target.value)}
                                className="form-select" 
                                aria-label="Default select example">
                                <option  defaultValue  hidden >select</option>
                                {dormitories.length > 0 ? 
                                 dormitories.map(e => <option value={e._id} key={e._id}>{e.name}</option>)
                                : <option disabled>No options yet</option>}
                            </select>
                     </div>
                     {errors.dormitories && <div className="text-danger"> Please select all field </div>}
                     <div className="col-xs-12 col-sm-6   mb-2 mt-4">
                            <button 
                            disabled={loading.dormitories}
                            className="btn blue__btn mr-3" 
                            onClick={handleChangeDormitories}>Save Changes</button>
                            <button className="btn btn-danger" onClick={handleCancelDormitories}>Cancel</button>
                     </div>
                    
                </div>
            </form>

        </div>
    )
}

export default Upgrade
