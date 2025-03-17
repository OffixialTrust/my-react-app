// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss';
import { useState } from 'react';

function App() {
    const [detail, setDetail] = useState({
        name: "",
        email: "",
        tel: ""
    });

    function displayDetails() {
        alert(` Name: ${detail.name} \n Email: ${detail.email} \n Phone Number: ${detail.tel}`);
        console.log(`Name: ${detail.name}`, `Email: ${detail.email}`, `Phone Number: ${detail.tel}`);
    }

    return (
        <>
            <div>
                <h1>Contact Form</h1>
              <form>
                  <input type="text" id="name" placeholder="Enter Your Name" value={detail.name} onChange={
                    e => setDetail(detail => { return {...detail, name: e.target.value} })
                  } />

                  <input type="email" id="email" placeholder="Enter Your Email" value={detail.email} onChange={
                    e => setDetail(detail => { return {...detail, email: e.target.value} })
                  } />

                  <input type="tel" id="tel" placeholder="Enter Your tel" value={detail.tel} onChange={
                    e => setDetail(detail => { return {...detail, tel: e.target.value} })
                  } />
               </form>
               <button id="submit" onClick={displayDetails}>Submit</button>
            </div>
        </>
    );
}

export default App
