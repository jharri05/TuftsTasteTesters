import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dewick() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/dewick")
            .then(response => {
                console.log("API Response:", response.data); // Debugging
                setMenu(response.data.menu);
            })
            .catch(error => {
                console.error("Error fetching menu:", error);
            });
    }, []);
    
    return (
        <div>
            <h1>Dewick Dining Hall</h1>
            <h2>Today's Menu</h2>
            <ul>
                {menu.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h2>End's Menu</h2>
        </div>
    );
}

export default Dewick;
