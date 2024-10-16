import React, { useState, useEffect } from "react";

const DisplayDateTime = () => {
    const [currentDateTime, setCurrentDateTime] = useState('');

    useEffect (() => {
        const now = new Date();
        const formattedDateTime = now.toLocaleString();
        setCurrentDateTime(formattedDateTime)
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px'}}>
            <h2>მიმდინარე დრო:</h2>
            <p>{currentDateTime}</p>
        </div>
    );
};

export default DisplayDateTime;