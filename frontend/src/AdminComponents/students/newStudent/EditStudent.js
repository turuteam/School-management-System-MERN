import React, {useState, useEffect} from 'react'
import PersonalInfo from '../../shared/Personalnfo';
import Academics from './AcademicsDetails';
import ContactDetails from '../../shared/Contact';
import ProfilePicture from '../../shared/ProfilePicture';
import Guadian from '../../shared/Guadian'
import { useForm } from "react-hook-form";
import {useParams} from 'react-router-dom';
import axios from '../../../store/axios';
import {errorAlert, successAlert} from '../../../utils'


function EditStudent() {
    const {id} = useParams();

    const [studentDetails, setstudentDetails] = useState({})

    //personal
    const [name, setname] = useState("");
    const [lastname, setlastname] = useState("");
    const [secondName, setsecondName] = useState("")
    const [gender, setgender] = useState("")
    const [dateofBirth, setdateofBirth] = useState("")
    const [email, setemail] = useState("")
    const [nationality, setnationality] = useState("")
    const [placeofBirth, setplaceofBirth] = useState("")
    const [religion, setreligion] = useState("")
    const [health, sethealth] = useState("")
    const [allege, setallege] = useState("")
    const [disease, setdisease] = useState("");

    const [profileUrl, setprofileUrl] = useState("");
    const [profileimg, setprofileimg] = useState("");
    const [loading, setloading] = useState(false)

    //form verification
    const { register, handleSubmit, errors } = useForm();

    //academics 
    const [autoID, setautoID] = useState(true);
    const [userID, setuserID] = useState("")
    const [classID, setclass] = useState("")
    const [section, setsection] = useState("")
    const [status, setstatus] = useState(null);
    const [dormitory, setdormitory] = useState("")
    const [schoolarship, setschoolarship] = useState("");
    const [feesCategory, setfeesCategory] = useState("");
    const [lastSchool, setlastSchool] = useState("");
    const [reasonforTransfer, setreasonforTransfer] = useState("")
    //contact details
    const [mobilenumber, setmobilenumber] = useState("");
    const [residence, setresidence] = useState("");
    const [telephone, settelephone] = useState("");
    const [postalAddress, setpostalAddress] = useState("")
    //guidan
    const [guadian, setguadian] = useState([]);
   
    useEffect(() => {
          axios.get(`/students/student/${id}`).then(res => {
              let data = res.data.student
              setstudentDetails(data);
              setname(data?.name);
              setlastname(data?.surname);
              setgender(data?.gender);
              setdateofBirth(data?.dateofBirth);
              setemail(data?.email);
              setnationality(data?.nationality);
              setplaceofBirth(data?.placeofBirth);
              setreligion(data?.religion);
              sethealth(data?.health);
              setallege(data?.allege);
              setdisease(data?.disease);
              setclass(data?.classID);
              setstatus(data?.statue);
              setdormitory(data?.dormitory);
              setschoolarship(data?.schoolarship);
              setfeesCategory(data?.fees);
              setlastSchool(data?.lastSchool);
              setreasonforTransfer(data?.reasonforTransfer);
              setmobilenumber(data?.mobilenumber);
              setresidence(data?.physicalAddress);
              settelephone(data?.telephone);
              setpostalAddress(data.postalAddress);
              setguadian(data?.guadian)
              setprofileimg(data?.profileUrl)
          })
    }, [id])

    const handleReset = (e) => {
        e.preventDefault();
        setname("");
        setsecondName("")
        setlastname("")
        setgender("")
        setdateofBirth("")
        setemail("");
        setnationality("")
        setplaceofBirth("")
        setreligion("")
        sethealth("");
        setallege("");
        setdisease("")

    }
    const handleCreateSubmit = () => {
        alert("submited");
        setloading(true)
        const fileData = new FormData();
        fileData.append("photo", profileUrl);
        axios.post('/upload', fileData, {}).then((res) => {
            const path= res.data.path;
        axios.put(`/students/update/${id}`, {
            profileUrl: path,
            name,
            middleName: secondName,
            surname:  lastname,
            gender,
            dateofBirth,
            email,
            nationality,
            religion,
            placeofBirth,
            health,
            disease,
            allege,
            classID,
            section,
            status,
            schoolarship,
            fees: feesCategory,
            lastSchool: {
                school: lastSchool,
                reason: reasonforTransfer
            },
            mobilenumber,
            telephone,
            postalAddress,
            physicalAddress: residence,
            guadian
        }).then(response => {
            setloading(false)
            if(response.data.error){
                errorAlert(response.data.error);
                return 0;
            }
            successAlert("successfully added");
            setstudentDetails(response.data.student)
        })
       }).catch(err => {
           setloading(false)
           console.log(err);
           errorAlert("something went wrong");
       })
    }

    const handleChangeFile = (e) => {
        const selected = e.target.files[0];
         if(selected?.size > 2000000 ){
             errorAlert("image is too large")
         }
         else if(selected){
            setprofileUrl(selected)
             const fileReader = new FileReader();
             fileReader.readAsDataURL(selected);
             fileReader.onloadend = () => {
               setprofileimg(fileReader.result)   
             };
         } 
         else{
             console.log('no file selected')
         }
    }
   

    return (
        <div>
            <h2>Edit Students</h2>
            <div>
                <form action="" className="content__container">
                      <ProfilePicture 
                        profileimg={profileimg} 
                        setprofileUrl={handleChangeFile}/>
                      <PersonalInfo
                        register={register}
                        errors={errors}
                        name={name} setname={setname}
                        secondName={secondName} setsecondName={setsecondName}
                        lastname={lastname} setlastname={setlastname}
                        gender={gender} setgender={setgender}
                        dateofBirth={dateofBirth} setdateofBirth={setdateofBirth}
                        email={email} setemail={setemail}
                        nationality={nationality} setnationality={setnationality}
                        placeofBirth={placeofBirth} setplaceofBirth={setplaceofBirth}
                        religion={religion} setreligion={setreligion}
                        healthCon={health}
                        setHealthCon={sethealth}
                        disease={disease}
                        setDisease={setdisease}
                        allerge={allege}
                        setallerge={setallege}
                      />
                        <br className="my-5"/>
                       <Academics
                         register={register}
                         errors={errors}
                         isEdit={true}
                         autoID={autoID}  setautoID={setautoID}
                         userID={userID}   setuserID={setuserID}
                         classID={classID} setclass={setclass}
                         section={section} setsection={setsection}
                         status={status} setstatus={setstatus}
                         dormitory={dormitory} setdormitory={setdormitory}
                         schoolarship={schoolarship} setschoolarship={setschoolarship}
                         feesCategory={feesCategory} setfeesCategory={setfeesCategory}
                         lastSchool={lastSchool} setlastSchool={setlastSchool}
                         reasonforTransfer={reasonforTransfer} setreasonforTransfer={setreasonforTransfer}
                       />
                        <br className="my-5"/>
                        <ContactDetails
                           register={register}
                           errors={errors}
                           mobilenumber={mobilenumber}
                           setmobilenumber={setmobilenumber}
                           residence={residence}
                           setresidence={setresidence}
                           settelephone={settelephone}
                           telephone={telephone}
                           setpostalAddress={setpostalAddress}
                           postalAddress={postalAddress}
                        />
                        <br className="my-5"/>
                        <Guadian guadian={guadian} setguadian={setguadian}/>
                        <br className="my-5"/>
                        <ProfilePicture/>
                        <br className="my-5"/>
                     <div className="row ">
                         <button 
                            type="submit" 
                            disabled={loading}
                            onClick={handleSubmit(handleCreateSubmit)} 
                            className=" col btn orange__btn mr-5" >
                                 {loading ?  
                               <> 
                                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                  <span className="visually-hidden">Loading...</span>
                               </> : "Save Changes"}
                            </button>
                         <button onClick={handleReset} className=" col btn blue__btn mr-5">Reset</button>
                        
                     </div>
                </form>

            </div>
        </div>
    )
}

export default EditStudent
