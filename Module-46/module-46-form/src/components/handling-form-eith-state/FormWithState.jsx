import { useState } from "react";

const FormWithState = () => {
  const [email, setEmail]=useState(null)
  const [name, setName]=useState('Redoy')
  const [password, setPassword]=useState(null)

  // validation of password field 
  const [err , setErr] =useState(null)
 
  const handleForm = (e) => {
    e.preventDefault()
    if(password.length < 6){
      setErr('password should be more than 6 character')
    }else{
       setErr('')
    console.log(email);
    console.log(name);
    console.log(password);}
  }
  const handleEmail =(e)=>{
      setEmail(e.target.value)
  }
  const handleName =(e)=>{
      setName(e.target.value)
  }
  const handlePassword =(e)=>{
      setPassword(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleForm} >
        <input
        // giving an default value of name field 
        value={name}
        onChange={handleName}
        className="bg-gray-300 my-3" type="text" name="text" />
        
         <br />
       
        <input
        onChange={handleEmail}
        className="bg-gray-300 my-3" type="email" name="email" />
        
        <br />
        
        <input 
        onChange={handlePassword}
        className="bg-gray-300 my-3" type="password" name="password" />
        <br />
        {
          err && <p>{err}</p>
        }
        <br />
        <input className="bg-gray-300" type="submit" placeholder="Submit" />
      </form>
    </div>
  );
};

export default FormWithState;