import React from 'react'

function Button(props) {
    return (
       <>
            <button style={{margin:"20px"}} className={props.color}>{props.name}</button>
           </>
    )
}

export default Button
