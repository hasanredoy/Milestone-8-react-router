import { useEffect, useRef } from "react";

const RefHook = () => {

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  // setting  cursor focus on input field 
  useEffect(() => {
    nameRef.current.focus()
  }, [])

  const handleForm = e => {
    e.preventDefault()
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  }
  return (
    <div>
      <form onSubmit={handleForm} >
        <input
          ref={nameRef}
          className="bg-gray-300 my-3 outline-none" type="text" name="text" />

        <br />
        <input
          ref={emailRef}
          defaultValue={'example@gmail.com'}
          className="bg-gray-300 my-3" type="email" name="email" />

        <br />
        <input
          ref={passwordRef}
          className="bg-gray-300 my-3" type="password" name="password" />

        <br />

        <input
          className="bg-gray-300" type="submit" placeholder="Submit" />
      </form>
    </div>
  );
};

export default RefHook;