import React, { useState } from 'react';
import Display from './Display';
function FormView(){
    const initialFormData = Object.freeze({
        name:"",
        comments:""});
        const [inputarr,setInputarr]= useState([])
        const [formData, updateFormData]= React.useState(initialFormData);
    const handleChange=(e)=> {
    updateFormData({...formData,[e.target.name]:e.target.value.trim()})
      }

    const handleSubmit =(e) =>{
        e.preventDefault()
        let name= formData.name;
        let comments= formData.comments;
        setInputarr([...inputarr,{name,comments}])
        console.log(inputarr);
        console.log(formData);
       
      }
    return(
      <div className='cont'>
        <div className='box1'>
    <div className='boxin1'>
    <p style={{fontWeight:'bold'}}>Share Your Experience</p>
    <lable>Name</lable><br/>
    <input name ="name" onChange={handleChange}/><br/>
    <lable>Comments:</lable><br/>
    <textarea name ="comments" onChange={handleChange}/><br/>
    <button onClick={handleSubmit}>Post</button>
    </div>
    </div>
    <div className='box2'>
    <table>
      <tbody>
  <Display inputarr={inputarr}/>
      
      </tbody>
    </table>
    </div>
    </div>
    )
}
export default FormView;