import React, {useState, useEffect} from 'react'

function PasswordGenerator() {
    const [length, setLength] = useState(8)
    const [hasNumbers, setHasNumbers] = useState(true)
    const [hasSpecialChar, setHasSpecialChar] = useState(false)
    const [password, setPassword] = useState('')

    useEffect(() => {
        let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        if (hasNumbers) {
            chars += '0123456789'
        }

        if (hasSpecialChar) {
            chars += '!@#$%^&*()'
        }

        let result = ''
        
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * chars.length)
            result += chars[randomIndex]

            // console.log(result, 'result')
            // console.log(randomIndex, 'randomIndex')
            // console.log(chars);
            // console.log(chars.length);
        }

        setPassword(result)
    }, [length, hasNumbers, hasSpecialChar])
    return (
        <>
            <h2>Password Generator</h2>

            <label>length : {length}</label>
            <br/>
            <label><strong> password is : </strong> {password}</label>
            <br/>

            <input type='range'  min={4} max ={20} value = {length}
                onChange={(e) => setLength(e.target.value)}/>
            <br/>

            <input type='checkbox' checked = {hasNumbers}
                onChange={(e) => setHasNumbers(!hasNumbers)}/> Include Numbers
            <br/>

            <input type='checkbox' checked = {hasSpecialChar}
                onChange={(e) => setHasSpecialChar(!hasSpecialChar)}/> Include Special Characters
        </>
    )
}

export default PasswordGenerator