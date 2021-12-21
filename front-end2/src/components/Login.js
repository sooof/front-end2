
import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';


const initForm = {
    username: '',
    password: ''
}
const Login = () =>{
    const [value, setValue] = useState(initForm)

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.value]: e.target.value
        })
    }
    console.log(value)
    const handleSubmit = (e) => {
        e.preventDefault();  
       
    }

    return(
        <div className="login-from">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={value.username}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={value.password}
                onChange={handleChange}
            />

            {/* <label> Role:
                <select name="role" onChange={handleChange}>
                    <option value="">---Select your role---</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
            </label> */}

            <button>Log in</button>
            </form>
        </div>

    );
}

export default Login;