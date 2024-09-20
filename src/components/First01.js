import React from 'react'
import './First.css'

function First01() {
  return (
   
    <div className='container'>
      <h1>Personal-data Form</h1>

   <form>
    <label for="firstname">First Name*</label>
    <input type='text' placeholder='Enter First Name' name='first name'/>
    
    <label for="lastname">Last Name*</label>
    <input type='text' placeholder='Enter Last Name' name='last name'/>

    <label for="age">Age*</label>
    <input type='text' placeholder='Enter age #' name='age'/>

    <label for="email">Email*</label>
    <input type='email' placeholder='Enter Email ID' name='email'/>

    <label for="contact">Contact*</label>
    <input type='text' placeholder='Enter Phone Number' name='contact'/>

    <label for="gender">Gender</label>
    <input type='radio' name='gender'/>Male
    <input type='radio' name='gender'/>Female
    <input type='radio' name='gender'/>Others

    <label for="domain">Domain</label>
    <select name='domain' id='domain'>
      <option value="mern">MERN stack developer</option>
      <option value="python django">Python Django developer</option>
      <option value="AI & ML">AI & ML</option>
      <option value="software testing">Software Tester</option>
      <option value="data analyst">Data Analyst</option>
    </select>

    <label for="resume">Resume</label>
    <input type='file' placeholder='select Resume' name='resume'/>

    <label for="url">URL</label>
    <input type='text' name='url'placeholder='Enter Image URL'></input>

    <label for="about">About</label>
    <textarea name='about' id='about'cols="25" rows="5" placeholder='Enter description'></textarea>

    <button type='button'>Reset</button>
    <button type='submit'>Submit</button> 


    </form>
    </div>
  )
}

export default First01