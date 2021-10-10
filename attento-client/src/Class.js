import { useState, useEffect } from "react";
import QRCode from "react-qr-code";

import { getDoc, getFirestore, collection, doc, onSnapshot, addDoc, updateDoc, Timestamp } from 'firebase/firestore';

import './class.css';

const Class = ({ lecName, lecID, onClose }) => {

  const db = getFirestore();
  const [token, setToken] = useState("");

  useEffect(() => {
    var t = generate_token(32);
    const classesCol = collection(db, 'classes');

    onSnapshot(doc(classesCol, lecID), (doc) => {
      var data = doc.data();
      if (data['attendees'] !== undefined) {
        if (data['attendees'][t] !== undefined) {
          console.log('yes');
          if (data['attendees'][t]['used'] === true) {
            t = generate_token(32);
          }
        } else {
          console.log('no');
        }
      }
    });
  }, []);

  function generate_token(length) {
    //edit the token allowed characters
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b = [];
    for (var i = 0; i < length; i++) {
      var j = (Math.random() * (a.length - 1)).toFixed(0);
      b[i] = a[j];
    }
    var token = b.join("");
    console.log(token);
    // Upload token to server.
    const document = doc(collection(db, 'classes'), lecID);
    updateDoc(document, {
      [`attendees.${token}`]: {
        used: false,
      }
    });
    setToken(token);
    return token;
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Attendo - {lecName}</h1>
      </div>
      <div className="qrCode">
        <QRCode value={token} />
      </div>

      <button onClick={() => {
        const document = doc(collection(db, 'classes'), lecID);
        updateDoc(document, {
          live: false,
        });
        onClose();
      }}>End Class</button>
    </div>
  );
}

export default Class;
