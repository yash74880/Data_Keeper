import React from 'react';
import { useState} from 'react';
import { json } from 'react-router';
import {useNavigate} from "react-router-dom";

const Create = () => {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [age, setAge] = useState(0);
     const [error, setError] = useState("");
     const navigate = useNavigate("/all"); 
    const handlesubmit = async(e) => {
          e.preventDefault();
          const addUser = {name,email,age};
          const response = await  fetch("http://localhost:3000",{
                  
                   method:"POST",
                   body: JSON.stringify(addUser),
                   headers: {
                       "content-Type" : "application/json",

                   },

          });
          const result = await response.json();
          if(!response.ok){
              console.log(result.error);
              setError(result.error);
          }
          if(response.ok){
              console.log(result);
              setError("");
              setName("");
              setEmail("");
              setAge();
              navigate("/all");
          }

    }
     
    return (
        <div className="container my-2">
        {error && <div class="alert alert-danger">
  {error}
</div> }
        <h2 className="text-centre">Enter the data</h2>
  
        <form onSubmit = {handlesubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" value = {name} onChange = {(e) => setName(e.target.value)} />
          </div>
  
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" value = {email} onChange = {(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input type="number" className="form-control" value = {age} onChange = {(e) => setAge(e.target.value)} />
          </div>
  
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    )
}

export default Create
