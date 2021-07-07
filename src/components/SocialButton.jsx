import React from 'react';
import {
    FacebookLoginButton,
    GoogleLoginButton,
    AppleLoginButton,
    } from 'react-social-login-buttons';
import {createButton} from "react-social-login-buttons";



      const handleClick = () => {
        alert("Hello!!");
      }


      const config = createButton(() => ({
        text: "Facebook 연결하기",
        icon: "facebook",
        iconFormat: name => `fa fa-${name}`,
        style: { background: "#3b5998" },
        activeStyle: { background: "#293e69" }
      }));
      

    export default () => {

        return (
          <>
           <FacebookLoginButton  onClick={handleClick} />
           <GoogleLoginButton onClick={handleClick} />
           <AppleLoginButton onClick={handleClick} />
          </>
        );
      }