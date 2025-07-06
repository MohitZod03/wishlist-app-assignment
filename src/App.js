// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import WishlistPage from "./pages/WishlistPage";
import Navbar from "./components/Navbar";

const App = () => {
    return ( <
        Router >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = "/"
        element = { < LoginPage / > }
        /> <
        Route path = "/signup"
        element = { < SignupPage / > }
        /> <
        Route path = "/dashboard"
        element = { < Dashboard / > }
        /> <
        Route path = "/wishlist/:id"
        element = { < WishlistPage / > }
        /> <
        /Routes> <
        /Router>
    );
};

export default App;