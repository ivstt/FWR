import { useNavigate } from "react-router-dom";
import React from 'react';
import "../styles/donate.css"
import "../styles/discover-pg.css"
import DonateFood from "../components/DonateFood";

export default function Donate() {

    const navigate = useNavigate();

    async function createItem(formData) {

        console.log(formData);
        const url = document.getElementById("baseUrl").value;;
        await fetch(url, {
            method: "POST",
            body: formData
        });
        navigate("/");
    }

    return (
        <div className="donate-container">
            <DonateFood onSubmit={createItem} />
        </div>
    );
}
