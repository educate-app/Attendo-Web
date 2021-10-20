import React, { useState } from 'react'

import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';

const Create = ({ onCreate }) => {
    const [lecName, setLecName] = useState('');

    const db = getFirestore();

    return (
        <div className="new-lecture">

            <label className="heading">Create new lecture</label>
            <div className="input-btn">
                <input type="text" value={lecName} onChange={(c) => setLecName(c.target.value)} className="new-lec" placeholder="Enter Lecture Name    ex. CSE1/lec2/March/14" />
                <button onClick={() => {// Lec create krna padega...
                    var collectionRef = collection(db, 'classes');
                    console.log(document.id);
                    addDoc(collectionRef, {
                        name: lecName,
                        live: true,
                        createdOn: Timestamp.now(),
                        attendees: {}
                    }).then((docRef) => {
                        console.log(docRef);
                        onCreate(lecName, docRef.id);
                    });
                }}> Create Class</button>

            </div>
        </div>
    )
}

export default Create
