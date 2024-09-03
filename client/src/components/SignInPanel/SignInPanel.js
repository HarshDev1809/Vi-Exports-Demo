// import { Navigate, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import "./SignInPanel.css";
// import { signInApi } from "../../api/auth/signin.api";

// function SignInPanel() {
//   const navigate = useNavigate();

//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const userDetails = {
//     userName: userName,
//     password: password,
//   };

//   function changeUserName(e) {
//     setUserName(e.target.value);
//   }

//   function changePassword(e) {
//     setPassword(e.target.value);
//   }

//   const goToSkipPage = () => {
//     navigate("/home");
//   };

//   const goToSignUpPage = () => {
//     navigate("/signup");
//   };

//   const signIn = async (e) => {
//     setErrorMessage("")
//     e.preventDefault();
//     try{
//       const response = await signInApi(userDetails);
//       if (response.response) {
//         setErrorMessage(response.response.data.message);
//       }else{
//         const token = response.data.accessToken;
//         const name =  response.data.name;
//         const userName = response.data.userName;
//         sessionStorage.setItem("token", token);
//         sessionStorage.setItem("name",name);
//         sessionStorage.setItem("userName",userName);
//         navigate("/home");
//       }
//     }catch(err){
//       console.log("Something went wrong!");
//     }
    
//   }

//   return <div className="main-div">
//     <div className="signin-panel-div bg-white text-dark p-1 w-100">
//         <div className="header-div">
//           <h3>Welcome !</h3>
//           <p>Sign in to continue</p>
//         </div>
//         <div className="form-div">
//           <form className="input-form" onSubmit={signIn}>
//             <input
//               className="signin-input bg-light border"
//               type="text"
//               onChange={changeUserName}
//               value={userName}
//               placeholder="Username"
//             ></input>
//             <input
//               className="signin-input bg-light border"
//               type="password"
//               onChange={changePassword}
//               value={password}
//               placeholder="Password"
//             ></input>
//             <button className="signin-btn bg-black text-white" type="submit" placeholder="Sign in">
//               sign in
//             </button>
//             <div className="error-div">{errorMessage}</div>
//             <div className="footer-div">
//               <span className="mt-5 hover" onClick={goToSignUpPage}>
//                 New User ? Sign up
//               </span>
//               {/* <span className="mt-5 hover" onClick={goToSkipPage}>
//                 Skip
//               </span> */}
//             </div>
//           </form>
//         </div>
//       </div>
//   </div>
// }

// export default SignInPanel;

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SignInPanel.css";
import { signInApi } from "../../api/auth/signin.api";

function SignInPanel() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const userDetails = {
    userName: userName,
    password: password,
  };

  function changeUserName(e) {
    setUserName(e.target.value);
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }

  const goToSignUpPage = () => {
    navigate("/signup");
  };

  const signIn = async (e) => {
    setErrorMessage("");
    e.preventDefault();
    try {
      const response = await signInApi(userDetails);
      if (response.response) {
        setErrorMessage(response.response.data.message);
      } else {
        const token = response.data.accessToken;
        const name = response.data.name;
        const userName = response.data.userName;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("userName", userName);
        navigate("/");
      }
    } catch (err) {
      console.log("Something went wrong!");
    }
  };

  return (
    <div className="main-div">
      <div className="signin-panel-div">
        <div className="header-div">
          <h3>Welcome Back!</h3>
          <p>Please sign in to continue</p>
        </div>
        <div className="form-div">
          <form className="input-form" onSubmit={signIn}>
            <input
              className="signin-input"
              type="text"
              onChange={changeUserName}
              value={userName}
              placeholder="Username"
            />
            <input
              className="signin-input"
              type="password"
              onChange={changePassword}
              value={password}
              placeholder="Password"
            />
            <button className="signin-btn" type="submit">
              Sign In
            </button>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className="footer-div">
              <span className="signup-link" onClick={goToSignUpPage}>
                New User? Sign up
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInPanel;

