import React, { useState, useRef } from 'react'

function AutoFocusNext() {
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const secondFoc = useRef()

    const handleFirstChange = (e) => {
        let value = e.target.value.replace(/\D/g, '')

        if ( value.length < 5) {
            setFirst(value)
        }
        if ( value.length == 4) {
            secondFoc.current.focus()
        }
    }

    return (
        <>
            <hr/>
            <h2>Enter 4 Characters</h2>
            <input  type = 'text' value={first}
                    onChange={handleFirstChange}
                    maxLength={4}/>

            <input type = 'text' ref={secondFoc}
                    value={second}
                    onChange={(e) => setSecond(e.target.value)}
                    placeholder="next input"/>
        </>
    )   
}

export default AutoFocusNext