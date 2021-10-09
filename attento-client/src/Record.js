import React from 'react'

const Record = () => {
    return (
        <div className = "record">
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
                    <tr>
                    <td data-column="Date and Time">14th March 2021</td>
                    <td data-column="Lecture Name">CSE1/lec2/March/14</td>
                    <td data-column="Attendance">60/70</td>
                
                    </tr>

                    <tr>
                    <td data-column="Date and Time">14th March 2021</td>
                    <td data-column="Lecture Name">CSE1/lec2/March/14</td>
                    <td data-column="Attendance">60/70</td>
                
                    </tr>
                    <tr>
                    <td data-column="Date and Time">14th March 2021</td>
                    <td data-column="Lecture Name">CSE1/lec2/March/14</td>
                    <td data-column="Attendance">60/70</td>
                
                    </tr>

                </tbody>
            </table>

            </div>
            
        </div>
    )
}

export default Record
