// src/pages/WishlistPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../services/Api";

const WishlistPage = () => {
    const { id } = useParams(); // wishlistId
    const user = JSON.parse(localStorage.getItem("user"));
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [price, setPrice] = useState("");

    const fetchProducts = async() => {
        const res = await api.get(`/wishlists/${id}/products`);
        setProducts(res.data);
    };

    const addProduct = async() => {
        await api.post(`/wishlists/${id}/products`, {
            name,
            imageUrl,
            price,
            addedBy: user.email,
        });
        fetchProducts();
        setName("");
        setImageUrl("");
        setPrice("");
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return ( <
        div style = {
            { padding: "20px" } } >
        <
        h2 > Wishlist Details < /h2>

        <
        input placeholder = "Product Name"
        value = { name }
        onChange = {
            (e) => setName(e.target.value) }
        /> <
        input placeholder = "Image URL"
        value = { imageUrl }
        onChange = {
            (e) => setImageUrl(e.target.value) }
        /> <
        input placeholder = "Price"
        value = { price }
        onChange = {
            (e) => setPrice(e.target.value) }
        /> <
        button onClick = { addProduct } > Add Product < /button>

        <
        h3 > Products < /h3> {
            products.map((p) => ( <
                div key = { p.id }
                style = {
                    { marginBottom: "10px" } } >
                <
                img src = { p.imageUrl }
                alt = { p.name }
                width = "100" / >
                <
                p > { p.name } - ₹{ p.price } <
                br / >
                <
                small > Added by: { p.addedBy } < /small> <
                /p> <
                /div>
            ))
        } <
        /div>
    );
};

export default WishlistPage;