import React, {useState} from 'react'
import PersonalInfo from '../../shared/Personalnfo';
import EmplymentDetails from './EmploymentDetails';
import ContactDetails from '../../shared/Contact';
import ProfilePicture from '../../shared/ProfilePicture';
import NextofKin from '../../shared/Guadian'
import { useForm } from "react-hook-form";

function EditStaff() {
    const [name, setname] = useState("");
    const [lastname, setlastname] = useState("");
    const [secondName, setsecondName] = useState("")
    const [gender, setgender] = useState("")
    const [dateofBirth, setdateofBirth] = useState("")
    const [email, setemail] = useState("")
    const [nationality, setnationality] = useState("")
    const [placeofBirth, setplaceofBirth] = useState("")
    const [religion, setreligion] = useState("")
    const [title, settitle] = useState("")

    //form verification
    const { register, handleSubmit, errors } = useForm();

    //EmplymentDetails 
    const [role, setRole] = useState("");
    const [department, setDepartment] = useState("")
    const [campus, setCampus] = useState("")
    const [employmentDate, setemploymentDate] = useState(null);
    const [qualification, setqualification] = useState("")
    const [years, setyears] = useState("");
    const [salary, setsalary] = useState("");
    const [allowance, setallowance] = useState("");
    


    //contact details
    const [mobilenumber, setmobilenumber] = useState("");
    const [residence, setresidence] = useState("");
    const [telephone, settelephone] = useState("");
    const [postalAddress, setpostalAddress] = useState("")

    //guidan
    const [nextofKin, setnextofKin] = useState([])
   

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
            <h2>Edit Staff Member</h2>
            <div>
                <form action="" className="content__container">
                      <PersonalInfo
                        register={register}
                        title={title}
                        setTitle={settitle}
                        isTeacher={true}
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
                      />
                        <br className="my-5"/>
                       <EmplymentDetails
                         register={register}
                         errors={errors}
                            role={role}
                            setRole={setRole}
                            department={department}
                            setDepartment={setDepartment}
                            campus={campus}
                            setCampus={setCampus}
                            employmentDate={employmentDate}
                            setemploymentDate={setemploymentDate}
                            qualification={qualification}
                            setqualification={setqualification}
                            years={years}
                            salary={salary}
                            allowance={allowance}
                            setallowance={setallowance}
                            setsalary={setsalary}
                            setyears={setyears}
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
                        <NextofKin 
                           isTeacher={true}
                           guadian={nextofKin} 
                           setguadian={setnextofKin}/>
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

export default EditStaff
