import React from 'react'
import Create from './Create'
import Record from './Record'

const Hero = ({log, setLog}) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome, Sushil Kumar</h2>
                <button onClick = {() => setLog(!log)}>Logout</button>
            </nav>

            <Create/><br />
            <Record/>

        </section>
    )
}

export default Hero

