import React, {useState, useRef, useEffect} from 'react'

function FormValidation() {
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [errors, setErrors] = useState({});
    const inputRef = useRef()

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const validate = () => {
        const newErrors = {};

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Invalid email format";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Minimum 6 characters required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;

    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (validate()) {
            alert("Form submitted successfully!");
        }
    }

    return (
        <>
            <hr />
            <form onSubmit={handleSubmit}>
                <input type = 'email' ref={inputRef} value = {email} placeholder='email'
                    onChange = {(e) => setEmail(e.target.value)} />

                {errors.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                )}

                <input type = 'password' value = {password}  placeholder='password'
                    onChange = {(e) => setpassword(e.target.value)}/>

                {errors.password && (
                    <p style={{ color: "red" }}>{errors.password}</p>
                )}

                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default FormValidation