import React from 'react';


function Hero() {
    const onClickMessage = () => {
        alert("This button does nothing.");
    };



    return (
            <div className="hero-container section-width">
                <img src="./images/illustration-working.svg" alt="Illustration" />
                <div className="hero-text">
                    <h1>More than just shorter links</h1>
                    <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                    <button className="btn-round-border" onClick={onClickMessage}>Get Started</button>
                </div>
            </div>
    )
}

export default Hero;