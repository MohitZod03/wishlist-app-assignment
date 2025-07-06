// src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return ( <
        nav style = {
            { padding: "10px", background: "#f5f5f5" } } >
        <
        Link to = "/dashboard"
        style = {
            { marginRight: "20px" } } >
        Dashboard <
        /Link> <
        button onClick = { handleLogout } > Logout < /button> <
        /nav>
    );
};

export default Navbar;