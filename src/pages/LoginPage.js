// src/pages/LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("user", JSON.stringify({ email }));
        navigate("/dashboard");
    };

    return ( <
        div style = {
            { padding: "20px" } } >
        <
        h2 > Login < /h2> <
        input type = "email"
        placeholder = "Enter Email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        /> <
        br / >
        <
        button onClick = { handleLogin } > Login < /button> <
        /div>
    );
};

export default LoginPage;