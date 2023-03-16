import React, { useState } from "react"

export default function TextFrom(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase()); // to uppercase it.
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleUpClickl = () => {
        setText(text.toLowerCase()); // to uppercase it.
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleClearText = () => {
        setText(''); // to uppercase it.
        props.showAlert("Empty", "success");
    }
    const handleOnChange = (event) => {
        console.log("handle on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // setText("Enter your state") // the way to change the text value
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className="mb-4">{props.heading} </h1>
                <div className="mb-3">
                    {/* <label htmlfor="myBox" class="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(16 14 12 / 40%)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="myBox" rows="3"></textarea>
                </div>
                <button disabled={text.length == 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length == 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClickl}>Convert to Lowercase</button>
                <button disabled={text.length == 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words, {text.length} characters</p>
            </div>
        </>
    )
}