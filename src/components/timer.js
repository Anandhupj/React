import React, { useState, useEffect} from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(()=> {

        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        },1000);
         
        return () => clearInterval(interval);
        },[]);

        return(
            <div>
                <p>Timer: {seconds} S</p>
            </div>
        );
}

export default Timer;