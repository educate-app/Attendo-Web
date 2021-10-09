
import React from 'react'

const Login = (props) => {

    const { email, setEmail, password, setPassword,log, setLog} = props
    return (
        <section className = "login">
            <div className="loginContainer">
                <label>Email</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>


                <label >Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>



                <div className="btnContainer">
                    <button onClick = {() => {
                        if(email === "admin@school.com" && password == "123456"){
                            setLog(!log);
                        } else {
                            // show error message.
                        }
                    }}>Sign in</button>
                </div>

            </div>


        </section>
    )
}

export default Login
