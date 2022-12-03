import React, { useState } from "react";


function ClickCounter() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(Date);
    const handleClick = () => {
        setCount(count + 1);
        setDate(Date);
    }
    return(
        <div>
            <h1>Click counter: {count}</h1>
            <h1>{date}</h1>
            <button onClick={handleClick}>Click</button>
            <p>
                {count} - {date}
            </p>
    </div>
    )
}
export default ClickCounter;