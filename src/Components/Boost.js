import React from 'react';

function Boost() {
    const onClickMessage = () => {
        alert("This button does nothing.");
    };



    return (
        <div className="boost-container">
            <h2>Boost your links today</h2>
            <button className="btn-round-border" onClick={onClickMessage}>Get Started</button>
        </div>
    )
}

export default Boost;