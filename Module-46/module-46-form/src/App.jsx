
import './App.css'
import Grandpa from './grandpa/Grandpa'
// import ReusebleForm from './components/reusebleForm/ReusebleForm'
// import HookForm from './components/HooksForm/HookForm'
// import RefHook from './components/using-Ref-Hook-to-manage-dom/RefHook'
// import Form from './components/from/Form'
// import FormWithState from './components/handling-form-eith-state/FormWithState'

function App() {
  // const handleSingUp =(data)=>{
  //   console.log('sing up data;' ,data);

  // }
  //  const handleProfileUpdate =(data)=>{
  //   console.log('profile update data:', data);

  // }

  return (
    <>
      
      {/* <Form></Form> */}
      {/* <FormWithState></FormWithState> */}
      {/* <RefHook></RefHook> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusebleForm formTitle={"Sing Up"} handleForm={handleSingUp}>
      <div>
          <h1>Sing up </h1>
          <p>to accses our features </p>
        </div>
      </ReusebleForm>
      <ReusebleForm formTitle={"Profile Update"} submitBtnTitle='Update' handleForm={handleProfileUpdate}>
      <div>
          <h1>Update youre profile  </h1>
          <p>to accses our features </p>
        </div>
       </ReusebleForm> */}
       <Grandpa></Grandpa>
    </>
  )
}

export default App
