import React, {useState} from 'react'
import PersonalInfo from '../../shared/Personalnfo';
import Academics from './AcademicsDetails';
import ContactDetails from '../../shared/Contact';
import ProfilePicture from '../../shared/ProfilePicture';
import Guadian from '../../shared/Guadian'
import { useForm } from "react-hook-form";


function NewStudent() {
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
    const [disease, setdisease] = useState("")

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

    }
    const handleCreateSubmit = () => {
        alert("submited")
    }

    return (
        <div>
            <h2>Add New Students</h2>
            <div>
                <form action="" className="content__container">
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
                         <button type="submit" onClick={handleSubmit(handleCreateSubmit)} className=" col btn orange__btn mr-5" >Create</button>
                         <button onClick={handleReset} className=" col btn blue__btn">Reset</button>
                     </div>
                </form>

            </div>
        </div>
    )
}

export default NewStudent
