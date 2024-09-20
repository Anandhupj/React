// JSX is a syntax extension for javascript used in react that allows you to write HTML like code inside javascript
// it looks like html but works within javascript,making it easier to visualize the structureof ui

import React from "react";
function Greeting(myData){
    return <h1>Hello, {myData.name}</h1>

}

function App(){
    return (
        <div>
            <Greeting name="John"/>
        </div>
    )
}
export default App;