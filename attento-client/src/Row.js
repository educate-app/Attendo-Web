import {useRef}from 'react'
import Modal from './Modal';
import { FaExternalLinkAlt } from "react-icons/fa";

const Row = ({time, name, attendance}) => {

    const modalRef = useRef();

    const openModal = () => {
        modalRef.current.openModal()
    };


    return (
        <>

                <td data-column="Date and Time">{time.toDate().toLocaleString()}</td>
                <td data-column="Lecture Name">{name}</td>
                <td data-column="Attendance">{Object.keys(attendance).length}</td>
                <td > <button className="view-btn" onClick={openModal}><FaExternalLinkAlt /></button></td>

                <Modal ref = {modalRef}>
                    <span className="close" onClick={() => modalRef.current.close()}>x</span>
                    <h1>{name}</h1>
                    
                    <h5>{time.toDate().toLocaleString()}</h5>
                    <br />
                    <table>
                        <thead>
                            <th>Enrollment No.</th>
                            <th>Name</th>
                            <th>Class</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1351351</td>
                                <td>Nihal Gupta</td>
                                <td>CSE - 2</td>
                            </tr>
                            <tr>
                                <td>1351351</td>
                                <td>Nihal Gupta</td>
                                <td>CSE - 2</td>
                            </tr>
                            <tr>
                                <td>1351351</td>
                                <td>Nihal Gupta</td>
                                <td>CSE - 2</td>
                            </tr>
                            <tr>
                                <td>1351351</td>
                                <td>Nihal Gupta</td>
                                <td>CSE - 2</td>
                            </tr>
                            <tr>
                                <td>1351351</td>
                                <td>Nihal Gupta</td>
                                <td>CSE - 2</td>
                            </tr>
                            <tr>
                                <td>1351351</td>
                                <td>Nihal Gupta</td>
                                <td>CSE - 2</td>
                            </tr>

                            <tr>
                                <td>1351351</td>
                                <td>Nihal Gupta</td>
                                <td>CSE - 2</td>
                            </tr>
                            <tr>
                                <td>1351351</td>
                                <td>Nihal Gupta</td>
                                <td>CSE - 2</td>
                            </tr>
                            <tr>
                                <td>1351351</td>
                                <td>Nihal Gupta</td>
                                <td>CSE - 2</td>
                            </tr>
                            <tr>
                                <td>1351351</td>
                                <td>Nihal Gupta</td>
                                <td>CSE - 2</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <button onClick={() => modalRef.current.close()}>Close Modal</button>
                </Modal>                        
        </>
    )
}

export default Row
