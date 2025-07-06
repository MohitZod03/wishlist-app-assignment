// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/Api";

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [wishlists, setWishlists] = useState([]);
    const [newWishlist, setNewWishlist] = useState("");

    const fetchWishlists = async() => {
        const res = await api.get(`/wishlists/${user.email}`);
        setWishlists(res.data);
    };

    const createWishlist = async() => {
        await api.post(`/wishlists`, {
            name: newWishlist,
            createdBy: user.email,
        });
        setNewWishlist("");
        fetchWishlists();
    };

    useEffect(() => {
        fetchWishlists();
    }, []);

    return ( <
        div style = {
            { padding: "20px" } } >
        <
        h2 > Welcome, { user.email } < /h2> <
        input value = { newWishlist }
        onChange = {
            (e) => setNewWishlist(e.target.value) }
        placeholder = "Wishlist name" /
        >
        <
        button onClick = { createWishlist } > Create Wishlist < /button>

        <
        h3 > Your Wishlists < /h3> {
            wishlists.map((w) => ( <
                div key = { w.id } >
                <
                Link to = { `/wishlist/${w.id}` } > { w.name } < /Link> <
                /div>
            ))
        } <
        /div>
    );
};

export default Dashboard;