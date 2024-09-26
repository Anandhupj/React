import React ,{useRef,useState} from "react";

function Toggle() {
    const  toggleRef = useRef(null);
    const[isVisible,setisVisible] = useState(false);

    const handleClick = () => {
        setisVisible(!isVisible);
        toggleRef.current.style.display = isVisible ? 'none' : 'block';
    };

    return (
        <div>
            <button onClick={handleClick}>Toggle</button>
            <div ref={toggleRef} style={{display:'none'}}>
                Toggled on and off
            </div>
        </div>
    );
}

export default Toggle;