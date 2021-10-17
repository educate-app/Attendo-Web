import { useEffect, useState } from 'react'

import { getFirestore, collection, orderBy, query, onSnapshot } from 'firebase/firestore';

import Row from './Row';

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
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d) =>
                            <tr>
                                <Row key={d['createdOn']} time={d['createdOn']} name = {d['name']} attendance={d['attendees']} />
                            </tr>
                        )}
                        

                    </tbody>
                </table>
                
            </div>
            

        </div>
    )
}

export default Record
