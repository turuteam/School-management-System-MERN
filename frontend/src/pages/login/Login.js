import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import logo from "../../assets/icons/logo.png";
import axios from "./../../store/axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loggin } from "../../store/slices/userSlice";
import { LoginString } from "../../store/localStorage";
import { errorAlert } from "../../utils";

const Login = ({ history }) => {
  const [userId, setuserId] = useState("admin");
  const [password, setpassword] = useState("BK20211");
  const [loading, setloading] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const handleSignin = () => {
    setloading(true);
    axios
      .post("/signin", { userID: userId, password })
      .then((res) => {
        const { data } = res;
        setloading(false);
        if (data.success === true) {
          const user = data?.user;
          dispatch(
            loggin({
              id: user?.userID,
              name: user?.name,
              email: user?.email,
              photoUrl: user?.profileUrl,
              role: user?.role,
              lastName: user?.surname,
              middleName: user?.middleName,
            })
          );
          localStorage.setItem(LoginString.ID, user?.userID);
          localStorage.setItem(LoginString.PhotoURL, user?.profileUrl);
          localStorage.setItem(LoginString.NAME, user?.name);
          localStorage.setItem(LoginString.EMAIL, user?.email);
          localStorage.setItem(LoginString.USERROLE, user?.role);
          localStorage.setItem(LoginString.LASTNAME, user?.surname);
          localStorage.setItem(LoginString.MIDNAME, user?.middleName);
          history.push("/");
        } else {
          console.log(data);
          errorAlert(data.error);
        }
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
        errorAlert("Connection  error try again later");
      });
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <input
                        value={userId}
                        name="userId"
                        ref={register({ required: true })}
                        onChange={(e) => setuserId(e.target.value)}
                        type="text"
                        required
                        placeholder="ID"
                        autoComplete="username"
                      />
                      <br />
                      {errors.userId && (
                        <span className=" form-error text-danger mb-2">
                          This field is required
                        </span>
                      )}
                    </CInputGroup>

                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        ref={register({ required: true })}
                        value={password}
                        required
                        onChange={(e) => setpassword(e.target.value)}
                        autoComplete="current-password"
                      />
                      <br />
                      {errors.password && (
                        <span className="form-error text-danger mb-2">
                          This field is required
                        </span>
                      )}
                    </CInputGroup>

                    <CRow>
                      <CCol xs="6">
                        <CButton
                          disabled={loading}
                          onClick={handleSubmit(handleSignin)}
                          type="submit"
                          color="primary"
                          className="px-4"
                        >
                          {loading ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </>
                          ) : (
                            <>Login</>
                          )}
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <img src={logo} alt="logo" />
                    <h2>Welcome Back</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
