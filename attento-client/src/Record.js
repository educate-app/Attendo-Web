import React, { useEffect, useState } from 'react'
import { getFirestore, collection, orderBy, query, onSnapshot, Timestamp } from 'firebase/firestore';

const Record = () => {

    const db = getFirestore();
    const [data, setData] = useState([]);

    useEffect(() => {

        var q = query(collection(db, 'classes'), orderBy('createdOn', 'desc'));
        onSnapshot(q, (d) => {
            var arr = [];
            d.docs.map((d) => arr.push(d.data()));
            setData(arr);
            console.log(d.docs.length);
        });

    }, [])


    console.log(data);

    return (
        <div className="record">
            <span className="heading">Class Records</span>
            <div className="class-record">
                <table>
                    <thead>
                        <tr>
                            <th>Date and Time</th>
                            <th>Lecture Name</th>
                            <th>Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d) =>
                            <tr>
                                <td data-column="Date and Time">{d['createdOn'].toDate().toLocaleString()}</td>
                                <td data-column="Lecture Name">{d['name']}</td>
                                <td data-column="Attendance">{Object.keys(d['attendees']).length}</td>

                            </tr>
                        )}

                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default Record
