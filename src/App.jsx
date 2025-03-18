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
            <div>
                <h1>Contact Form</h1>
              <form onSubmit={ displayDetails }>
                  <input type="text" id="name" placeholder="Enter Your Name" required value={detail.name} onChange={
                    e => setDetail(detail => { return {...detail, name: e.target.value} })
                  } />

                  <input type="email" id="email" placeholder="Enter Your Email" required value={detail.email} onChange={
                    e => setDetail(detail => { return {...detail, email: e.target.value} })
                  } />

                  <input type="tel" id="tel" placeholder="Enter Your Phone No." required value={detail.tel} onChange={
                    e => setDetail(detail => { return {...detail, tel: e.target.value} })
                  } />

                 <input id="submit" type="submit" value="Submit" />
               </form>
            </div>
    );
}

export default App
