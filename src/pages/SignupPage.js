// src/pages/SignupPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSignup = () => {
        localStorage.setItem("user", JSON.stringify({ email }));
        navigate("/dashboard");
    };

    return ( <
        div style = {
            { padding: "20px" } } >
        <
        h2 > Sign Up < /h2> <
        input type = "email"
        placeholder = "Enter Email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        /> <
        br / >
        <
        button onClick = { handleSignup } > Sign Up < /button> <
        /div>
    );
};

export default SignupPage;