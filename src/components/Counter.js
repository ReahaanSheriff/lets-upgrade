import React from 'react'
import { useState } from 'react';

function Counter() {
    const [score, setScore] = useState(0);
    return (
        <div className="container mt-5">
            <center>
                <h1>{score}</h1>
            <button className="btn btn-success mr-5" onClick={()=> (score === 25)?"":(setScore(score+1))}>Increment</button>
            <button className="btn btn-warning mr-5" onClick={()=>(score >0)?(setScore(score-1)):""}>Decrement</button>
            <button className="btn btn-danger" onClick={()=>{setScore(0)}}>Reset</button>
            </center>
        </div>
    )
}

export default Counter
