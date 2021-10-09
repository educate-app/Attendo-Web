import React from 'react'

const Hero = ({log, setLog}) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick = {() => setLog(!log)}>Logout</button>
            </nav>
        </section>
    )
}

export default Hero
