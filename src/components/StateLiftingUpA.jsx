import React, { useState } from 'react'

function StateLiftingUpA({type , setType}) {
    return (
        <>  
            <hr />
            <p>state lifting up</p>
            <input type='text' value = {type} onChange = {e => setType(e.target.value)}/>
        </>
    )
}

export default StateLiftingUpA