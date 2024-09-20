import React,{ useRef } from "react";

function UseRef() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div>
        <input type="text" ref={inputRef} placeholder="Click the button to focus me"/>
        <button onClick={handleFocus}>Focus the input</button>
        </div>

    )
}

export default UseRef