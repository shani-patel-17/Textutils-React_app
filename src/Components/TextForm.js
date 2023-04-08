import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter your text here");
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleClClick = () => {
        let newText = ""
        setText(newText)
    }
    const handleCapWordClick = () => {
        let arr = text.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        }
        let newText = arr.join(" ")
        setText(newText)
    }
    const handleToggleCaseClick = () => {
        let newText = text.split("")
        for (let i = 0; i < newText.length; i++) {
            if (newText[i].toUpperCase() === newText[i]) {
                newText[i] = newText[i].toLowerCase()
            }
            else {
                newText[i] = newText[i].toUpperCase()
            }

        }
        let textFormated = newText.join("")
        setText(textFormated)
    }
    const handleOnChange = (event) => {
        setText("")
        setText(event.target.value)
    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className='container'> <h3>{props.heading}</h3>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                        <br></br>
                        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                        <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear the Text</button>
                        <button className="btn btn-primary mx-2" onClick={handleCapWordClick}>Capitalize Word</button>
                        <button className="btn btn-primary mx-2" onClick={handleToggleCaseClick}>tOGGLE cASE</button>
                    </div>
                </div>
                <div className="container">
                    <h2>Your Text Summary</h2>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <h3>Text Preview</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}
