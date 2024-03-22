
const Form = () => {
  const handleForm = e=>{
    e.preventDefault()
    console.log(e.target.text.value);
    console.log(e.target.email.value);
  }
  return (
    <div>
         
         <form onSubmit={handleForm} >
          <input className="bg-gray-300 my-3" type="text" name="text"/> <br />
          <input className="bg-gray-300 my-3" type="email" name="email"/>
          <br />
          <input className="bg-gray-300" type="submit" placeholder="Submit"/>
        </form>
    </div>
  );
};

export default Form;