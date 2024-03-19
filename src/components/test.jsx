import React from "react";
import { useLocation } from 'react-router-dom';

function Test() {
    const location = useLocation();
    const subject = location.state.subject;

    return (
        <div>
            <p>Test</p> 
            {subject}
        </div>
    )
}

export default Test;