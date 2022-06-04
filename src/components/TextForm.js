import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        // console.log("Button clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        // console.log("Button clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleChange = (event) => {
        // console.log("Content changed");
        setText(event.target.value);
    }
    const handleSaClick = () => {
    let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleClear = ()=>{ 
        let newText = '';
        setText(newText);
    }

    return (
        <>
            <div style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder='Enter the text' value={text} onChange={handleChange} style={{ backgroundColor: props.mode === 'dark' ? '#2d2d2e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="10"></textarea>
                </div>
                <button className={text.split(" ").filter((element)=>{return element.length!==0}).length===0 ?'btn btn-primary mx-3 my-3 disabled':'btn btn-primary mx-3 my-3'} onClick={handleUpClick}>Convert to Upperrcase</button>
                <button className={text.split(" ").filter((element)=>{return element.length!==0}).length===0 ?'btn btn-primary mx-3 my-3 disabled':'btn btn-primary mx-3 my-3'} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className={text.split(" ").filter((element)=>{return element.length!==0}).length===0 ?'btn btn-primary mx-3 my-3 disabled':'btn btn-primary mx-3 my-3'} onClick={handleSaClick}>Remove unwanted spaces</button>
                <button className={text.split(" ").filter((element)=>{return element.length!==0}).length===0 ?'btn btn-primary mx-3 my-3 disabled':'btn btn-primary mx-3 my-3'} onClick={handleClear}>Clear Text</button>
            </div>
            <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>Your text contains {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>It will take {(text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008).toFixed(2)} minutes to read the text</p>
                <h2>Preview</h2>
                <p>{text.length === 0 ?<strong>No text to preview</strong> : text}</p>
                {/* {console.log(text)} */}
            </div>
        </>
    )
}
