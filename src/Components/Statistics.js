import React from 'react';


function Statistics() {
    return (
        <div className="statistics-container">
            <div className="statistics-title">
                <h3>Advanced Statistics</h3>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className="statistics-card-container">
                <div className="statistics-card">
                    <div className="stats-img-container">
                        <img src="./images/icon-brand-recognition.svg" alt="Brand recognition" />
                    </div>
                    <h5>Brand Recognition</h5>
                    <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className="statistics-card mt-2">
                    <div className="stats-img-container">
                        <img src="./images/icon-detailed-records.svg" alt="Detailed records" />
                    </div>
                    <h5>Detailed Records</h5>
                    <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                <div className="statistics-card mt-4">
                    <div className="stats-img-container">
                        <img src="./images/icon-fully-customizable.svg" alt="Fully customizable" />
                    </div>
                    <h5>Fully Customizable</h5>
                    <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>
        </div>
    )
}

export default Statistics;