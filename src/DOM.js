import React, {useState, useRef} from 'react';
import './DOM.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'

export default function DOM() {
    const [isCircle, setIsCircle] = useState(false);
    const nameInput = useRef(null);
    const clearInput = () =>{
        nameInput.current.value="";
    }
  return (
    <div className="app">
        {/* useState() */}
        <Button onClick={() => setIsCircle(!isCircle)} className='bth btn-primary'>Change Shape</Button>
        <div className={isCircle ? "circle":"square"}>

        
        </div>
        <hr></hr>
           <Form.Label htmlFor="username">Password</Form.Label>
            <Form.Control
                type="text"
                id="username"
                aria-describedby="username"
                placeholder='Enter username'
                ref={nameInput}
                
            />
            <Button onClick={clearInput} className='bth btn-success'>Submit</Button>

    </div>
  )
}
