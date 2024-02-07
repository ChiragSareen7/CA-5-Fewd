import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Register() {
 const[data,setData]=useState({
 });

 const [alert,setAlert]=useState('');

 const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      if (!data.name) {
      setAlert('Please enter your name!');
    } 
    
    else if (!data.contact || !/^\d{10}$/.test(data.contact)) {
        setAlert('Please enter a valid 10-digit number!');
      } 
      
      else if (!data.email) {
      setAlert('Please enter your email!');
    }  
    else if (!data.password || data.password.length < 10 )
    
    {
        setAlert('Enter a vaild 10 character password!');
      } else if (data.repeatPassword != data.password)
       {
        setAlert('Repeat your password!');
      }
      
      else{
        setAlert('Your now a member of Books Haven')
      }
      
  };

  return (
    <div>
      <div className='head'>Register into Books Haven</div>
      <form onSubmit={handleSubmit} className='data'>
       <label className='labels'>Name:
           <input className='enter1' type='text' placeholder='Enter Your Name' name='name' value={data.name} onChange={handleChange}/>
       </label>
       <br />
       <label className='labels'>Contact:
           <input className='enter2' type='number' placeholder='Enter your contact no.' name='contact' value={data.contact} onChange={handleChange}/>
       </label>
       <br />
       <label className='labels'>Email:
           <input className='enter3' type='text' placeholder='Enter your mail' name='email' value={data.email} onChange={handleChange}/>
       </label>
       <br />
       <label className='labels'>Password:
            <input className='enter4' type='text' placeholder='Enter your Password' name='password' value={data.password} onChange={handleChange}/>
       </label>
       <br />
       <label className='labels'>Repeat-Password:
            <input className='enter5' type='text' placeholder='Repeat your password' name='repeatPassword' value={data.repeatPassword} onChange={handleChange}/>
       </label>
       <br />

       <button type='submit' className='submitButton'>Register</button>
      </form>

     {alert && <div className='alert'>{alert}</div>}
    </div>
  )
}

export default Register
