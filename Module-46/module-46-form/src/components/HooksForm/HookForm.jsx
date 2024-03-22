import useInputHook from "../../Custom-Hooks/inputHook";

const HookForm = () => {
  // const [name , handleNameChange] =useInputHook('hello')
    const emailState = useInputHook('hello@gmail.com')
  const handleForm=(e)=>{
   console.log('name ', emailState.value);
    e.preventDefault()
  }
  return (
    <div>
        <form onSubmit={handleForm} >
          {/* <input value={name} onChange={handleNameChange} className="bg-gray-300 my-3" type="text" name="text"/> <br /> */}
          <input {...emailState} className="bg-gray-300 my-3" type="email" name="email"/>
          <br />
          <input className="bg-gray-300 my-3" type="password" name="password"/>
          <br />
          <input className="bg-gray-300" type="submit" placeholder="Submit"/>
        </form>
    </div>
  );
};

export default HookForm;