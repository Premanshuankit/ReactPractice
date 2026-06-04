import React, {useState} from 'react'

function Toggle() {
    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle(prev => !prev)
    }
    return (
        <>
            <hr />
            { toggle ? <input type='text' /> : null}
            <button onClick={handleToggle}>Toggle</button>
        </>
    )
}

export default Toggle