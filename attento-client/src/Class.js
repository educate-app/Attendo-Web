import { useState, useEffect } from "react";
import QRCode from "react-qr-code";

import { getFirestore, collection, getDoc } from 'firebase/firestore/lite';

import './class.css';

function App() {

  const db = getFirestore();
  const [token, setToken] = useState("");

  // Get a list of cities from your database
  async function getClasses() {
    const classesCol = collection(db, 'classes');
    const classesSnapshot = await getDoc(classesCol);
    const cityList = classesSnapshot.docs.map(doc => doc.data());
    console.log(cityList);
  }

  useEffect(() => {
    setToken(generate_token(32));
    getClasses();
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1>Attendo - FCM Class</h1>
      </div>
      <div className="qrCode">
        <QRCode value={token} />
      </div>
    </div>
  );
}

function generate_token(length) {
  //edit the token allowed characters
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  var b = [];
  for (var i = 0; i < length; i++) {
    var j = (Math.random() * (a.length - 1)).toFixed(0);
    b[i] = a[j];
  }
  return b.join("");
}

export default App;
