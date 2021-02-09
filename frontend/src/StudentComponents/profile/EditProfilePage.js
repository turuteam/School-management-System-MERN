import React, {useState} from 'react';
import {errorAlert} from '../../utils';
import PersonalInfo from '../../AdminComponents/shared/Personalnfo';
import ProfilePicture from '../../AdminComponents/shared/ProfilePicture';
import Contact from '../../AdminComponents/shared/Contact';
import Guadian from '../../AdminComponents/shared/Guadian'

import { useForm } from "react-hook-form";


function EditProfilePage() {
    const { register, handleSubmit, errors } = useForm();

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

    const [mobilenumber, setmobilenumber] = useState("");
    const [residence, setresidence] = useState("");
    const [telephone, settelephone] = useState("");
    const [postalAddress, setpostalAddress] = useState("");

    const [guadian, setguadian] = useState([]);

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
    const handleEdit = () => {
        alert("submited")
    }

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


    return (
        <div>
            <h3>Edit My Profile</h3>
            <form action="" className="content__container mt-3">
                   <ProfilePicture 
                    profileimg={profileimg} 
                    setprofileUrl={handleChangeFile}/>
                     <br className="my-5"/>
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
                      <Contact
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

                        <div className="row ">
                         <button type="submit" onClick={handleSubmit(handleEdit)} className=" col btn orange__btn mr-5" >Create</button>
                         <button onClick={handleReset} className=" col btn blue__btn mr-5">Reset</button>
                         <button className="col btn btn-danger">Cancel</button>
                     </div>
            </form>
        </div>
    )
}

export default EditProfilePage
