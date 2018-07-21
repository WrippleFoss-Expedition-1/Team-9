import React from 'react';
import StepOne from './Multistep/Step1';
import "./Welcome.css";

// Figure out to add a step progess that will be in sync with steps

function Multistep() {
    return <div>
        <h1>Here comes the multistep form</h1>
        <StepOne />
    </div>;
}

export default Multistep;
