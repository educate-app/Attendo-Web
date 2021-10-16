import React, { useState } from 'react'
import Create from './Create'
import Record from './Record'
import Class from "./Class"


const Hero = ({ log, setLog }) => {


    const [currentLecName, setCurrentLecName] = useState([]);

    return currentLecName.length > 0 ? <Class lecName={currentLecName[0]} lecID={currentLecName[1]} onClose={() => {
        setCurrentLecName([]);
    }} /> : (
        <section className="hero">
            <nav>
                <h2>Welcome, Sushil Kumar</h2>
                <button onClick={() => setLog(!log)}>Logout</button>
            </nav>

            <Create onCreate={(lecName, lecId) => {
                setCurrentLecName([lecName, lecId]);
            }} /><br />
            <Record />          

        </section>
    )
}

export default Hero

