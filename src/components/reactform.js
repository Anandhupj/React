import React, {useState} from "react";

function RForm(){
    const [formData,setFormData] = useState({name:'',email:'',age:''});

    const [submittedData,setSubmittedData] = useState('');

    const handleChange =(e) =>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };

    const handleSubmit =(e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>React Submit Form</h1>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name}
                    onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    Email:
                    <input type="text" name="email" value={formData.email}
                    onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    Age:
                    <input type="number" name="age" value={formData.age}
                    onChange={handleChange}/>
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>

            {submittedData &&(
                <div>
                    <h2>Submitted Data:</h2>
                    <p>Name:{submittedData.name}</p>
                    <p>Email:{submittedData.email}</p>
                    <p>Age:{submittedData.age}</p>
                    </div>
            )}
        </div>
    );
}

export default RForm;