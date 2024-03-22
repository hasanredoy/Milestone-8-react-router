
const ReusebleForm = ({ formTitle, handleForm, submitBtnTitle = 'Submit' , children}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault()
    const data = {
      name: e.target.text.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }
    handleForm(data)
  }
  return (
    <div>
      {/* <h1 className="text-2xl text-center">{formTitle}</h1> */}
      {children}
      <form onSubmit={handleLocalSubmit} >
        <input className="bg-gray-300 my-3" type="text" name="text" /> <br />
        <input className="bg-gray-300 my-3" type="email" name="email" />
        <br />
        <input className="bg-gray-300 my-3" type="password" name="password" />
        <br />
        <input className="bg-gray-300" type="submit" placeholder="Submit" value={submitBtnTitle} />
      </form>
    </div>
  );
};

export default ReusebleForm;