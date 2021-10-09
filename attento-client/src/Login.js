import { useState } from 'react'
import React from 'react'


const Login = (props) => {

    const [error,setError] = useState(false)

    const { email, setEmail, password, setPassword,log, setLog} = props
    return (
        <section className = "login">
            <div className="loginContainer">
                <label>Email</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>


                <label >Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>

    
                {
                    error ? (<p className = "err">Error : Email or password is wrong</p>) : (<span></span>)
                }


                <div className="btnContainer">
                    <button onClick = {() => {
                        if(email === "admin@school.com" && password === "123456"){
                            setLog(!log);
                        } else {
                            if(!error){
                                setError(!error)
                            }
                
                        }
                    }}>Sign in</button>
                </div>

            </div>


        </section>
    )
}

export default Login
