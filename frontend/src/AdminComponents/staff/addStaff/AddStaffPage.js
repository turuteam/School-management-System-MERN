import React, {useState} from 'react'
import PersonalInfo from '../../shared/Personalnfo';
import EmplymentDetails from './EmploymentDetails';
import ContactDetails from '../../shared/Contact';
import ProfilePicture from '../../shared/ProfilePicture';
import NextofKin from '../../shared/NextofKin'
import { useForm } from "react-hook-form";
import {errorAlert, successAlert} from '../../../utils';
import axios from '../../../store/axios';


function NewStaff() {
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
    const [title, settitle] = useState("")

    const [profileUrl, setprofileUrl] = useState("");
    const [profileimg, setprofileimg] = useState("")


    //form verification
    const { register, handleSubmit, errors } = useForm();

    //EmplymentDetails 
    const [role, setRole] = useState("");
    const [department, setDepartment] = useState("")
    const [campus, setCampus] = useState("")
    const [employmentDate, setemploymentDate] = useState("");
    const [qualification, setqualification] = useState("")
    const [years, setyears] = useState("");
    const [salary, setsalary] = useState("");
    const [allowance, setallowance] = useState("");
    const [health, sethealth] = useState("")
    const [allege, setallege] = useState("")
    const [disease, setdisease] = useState("")
    const [loading, setloading] = useState("")
    const [classID, setclass] = useState("")
    const [courses, setcourses] = useState([])


    //contact details
    const [mobilenumber, setmobilenumber] = useState("");
    const [residence, setresidence] = useState("");
    const [telephone, settelephone] = useState("");
    const [postalAddress, setpostalAddress] = useState("")

    //guidan
    const [nexttelephone, setnexttelephone] = useState("")
    const [nextname, setnextname] = useState("")
    const [nextlastname, setnextlastname] = useState("")
    const [nextemail, setnextemail] = useState("")
    const [relationship, setrelationship] = useState("")
    const [occupation, setoccupation] = useState("")
    const [address, setaddress] = useState("");

    const handleReset = (e) => {
        e.preventDefault();
        setname(""); setRole("");
        setsecondName(""); setDepartment("")
        setlastname(""); setCampus("");
        setgender(""); setemploymentDate("");
        setdateofBirth(""); setqualification("");
        setemail("");   setyears("");
        setnationality("");  setallowance("");
        setplaceofBirth(""); sethealth("");
        setreligion(""); setallege("");
        settitle("");  setdisease("");
        setprofileUrl(""); setloading("")
        setprofileimg("");  setclass("");
        setcourses("");  setmobilenumber("");
        setresidence("");  settelephone("");
        setpostalAddress("");  setnexttelephone("")
        setnextname("");  setnextlastname("");
        setnextemail(""); setrelationship("");
        setoccupation("");  setaddress("")

    }

    const handleCoursesCheckbox = (e) => {
        console.log(e, "ckecked")
        

    }


    const handleCreateSubmit = () => {
        const fileData = new FormData();
        fileData.append("photo", profileUrl);
        axios.post('/upload', fileData, {}).then((res) => {
            const path= res.data.path;

            axios.post('/teachers/create', {
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
                course: [],
                classID,
                position: role,
                mobilenumber,
                telephone,
                postalAddress,
                physicalAddress: residence,
                nextofKin: {
                    name: nextname,
                    relationship: relationship,
                    occupation: occupation,
                    email: nextemail,
                    mobile: nexttelephone,
                    address: address,
                    lastname: nextlastname,
                }
            }).then(response => {
                setloading(false)
                if(response.data.error){
                    errorAlert(response.data.error);
                    return 0;
                }
                handleReset()
                successAlert("successfully added");
            })
            .catch(err => {
                setloading(false)
                console.log(err);
                errorAlert("something went wrong");
            })
        
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
            <h2>Add New Staff Member</h2>
            <div>
                <form action="" className="content__container">
                        <ProfilePicture 
                        profileimg={profileimg} 
                        setprofileUrl={handleChangeFile}
                       />
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
                        healthCon={health}
                        setHealthCon={sethealth}
                        disease={disease}
                        setDisease={setdisease}
                        allerge={allege}
                        setallerge={setallege}
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
                            handleCoursesCheckbox={handleCoursesCheckbox}

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
                         lastname={nextlastname} 
                         setlastname={setnextlastname}
                         name={name}
                         setname={setnextname}
                         errors={errors}
                         register={register}
                         telephone={nexttelephone}
                         settelephone={setnexttelephone}
                          email={nextemail}
                          setemail={setnextemail}
                          setaddress={setaddress}
                          address={address}
                          occupation={occupation}
                          setoccupation={setoccupation}
                          relationship={relationship}
                         setrelationship={setrelationship}
                           />
                      
                        <br className="my-5"/>
                     <div className="row ">
                         <button type="submit" 
                           disabled={loading}
                           onClick={handleSubmit(handleCreateSubmit)} 
                           className=" col btn orange__btn mr-5" >
                              {loading ?  
                               <> 
                                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                  <span className="visually-hidden">Loading...</span>
                               </> : "Create"}
                        </button>
                          <button 
                           onClick={handleReset} 
                           className=" col btn blue__btn">
                               Reset
                         </button>
                     </div>
                </form>

            </div>
        </div>
    )
}

export default NewStaff
