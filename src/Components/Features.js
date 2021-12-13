import React, { useState } from 'react';
import Statistics from './Statistics';
import { CgClose } from "react-icons/cg";
import { useTransition, animated } from 'react-spring';


function Features() {
    // State.
    const [ formInputText, setFormInputText ] = useState("");
    const [ linkError, setLinkError ] = useState(false);
    const [ shortendLinks, setShortendLinks ] = useState([]);

    // Input change handler.
    const handleChange = (event) => {
        setFormInputText(event.target.value);
    };


    // React Spring.
    const errorTransition = useTransition(linkError, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });


    // Api call.
    const getDataFormApi = (link) => {
        let callApi = new XMLHttpRequest();
        callApi.onreadystatechange = () => {
            if (callApi.readyState === 4 && callApi.status === 201) {
                let response = JSON.parse(callApi.response);
                let newElement = {
                    shortLink: response.result.short_link,
                    originalLink: response.result.original_link,
                    elementCopied: false
                }
                setShortendLinks([...shortendLinks, newElement]);
                setLinkError(false);
            } else if (callApi.status === 400) {
                setLinkError(true);
            }
        }

        callApi.open("GET", `https://api.shrtco.de/v2/shorten?url=${link}`);
        callApi.send();
    }


    // Form submit.
    const formSubmit = (event) => {
        event.preventDefault();
        getDataFormApi(formInputText);
        setFormInputText("");
    };


    // Copy to clipboard
    const copyToClipboard = (element, index) => {
        let modifyObject = element;
        const array = shortendLinks;
        modifyObject = {
            shortLink: element.shortLink,
            originalLink: element.originalLink,
            elementCopied: true
        }
        array.splice(index, 1, modifyObject);
        setShortendLinks([...array]);
        navigator.clipboard.writeText(element.shortLink);
    }


    // Delete element.
    const deleteElement = (element) => {
        let array = shortendLinks;
        array.splice(element, 1);
        setShortendLinks([...array]);
    }




    return (
        <div className="features-container section-width">
            {/* ====================================== Interactive Form ====================================== */}
            <div className="interactive-container-form">
                <div className="form-container">
                    <form onSubmit={formSubmit}>
                        <div className="form-group">
                            <input type="text" name="link" placeholder="Shorten a link here..." value={formInputText} onChange={handleChange} className={linkError ? "input input-error" : "input input-normal"}/>
                            {errorTransition((style, linkError) => linkError ? (
                                <animated.p style={style}>Please type a valid link</animated.p>
                            ) : null)}
                        </div>

                        <button type="submit">Shorten It!</button>
                    </form>
                </div>
            </div>

            {/* ====================================== Interactive Shortend Links ====================================== */}
            <div className="interactive-shortend-links">
                {shortendLinks.map((element, index) => (
                    <div className="shortened-link-container" key={index}>
                        <h6>{element.originalLink}</h6>
                        <div className="shortened-link-details">
                            <p>{element.shortLink}</p>
                            <button onClick={() => copyToClipboard(element, index)} className={element.elementCopied ? "copy-btn copied-btn" : "copy-btn not-copied-btn"}>{element.elementCopied ? "Copied" : "Copy"}</button>
                        </div>
                        <button className="delete-btn" onClick={() => deleteElement(index)}><CgClose/></button>
                    </div>
                ))}
            </div>

            {/* ====================================== Statistics ====================================== */}
            <Statistics />
        </div>
    )
}

export default Features;