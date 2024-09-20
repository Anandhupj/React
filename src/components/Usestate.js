import React, { useState} from "react";

function Counter() {
const [count, setCount] = useState(0);  //initial state is 0 //) 
return (
    <div>
        <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increase</button> {/* increment count */} 
        <button onClick={()=> setCount(count - 1) }>decrease</button>
    </div>
)
}

export default Counter
