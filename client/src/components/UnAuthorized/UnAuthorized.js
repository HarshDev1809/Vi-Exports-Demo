// import { FaceLoader } from "@moj-ui/fun-ui";
// import { Link } from "react-router-dom";

// function UnAuthorized(){
//     return <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
//         <h1>Sign In to Continue.</h1>
//         <h1>Click <Link to={"/signin"}>here</Link> to signin</h1>
//     </div>
// }

// export default UnAuthorized;

import React from 'react';
import { FaceLoader } from '@moj-ui/fun-ui';
import { Link } from 'react-router-dom';
import './UnAuthorized.css'; // Ensure you create this CSS file for custom styles

function UnAuthorized() {
    return (
        <div className="unauthorized-container">
            <div className="loader-container">
                <FaceLoader />
            </div>
            <div className="message-container">
                <h1 className="title">Sign In to Continue</h1>
                <p className="description">
                    You need to be signed in to access this page.
                </p>
                <Link className="signin-link" to="/signin">
                    Click here to sign in
                </Link>
            </div>
        </div>
    );
}

export default UnAuthorized;
