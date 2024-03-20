
import './App.css'
import Options from './components/Options/Options'
import Chart from './components/making-chart-with-react/Chart'
import NavBar from './components/nav-bar/NavBar'
import Phones from './components/using-axios/Phones'

function App() {


  return (
    <>
    <NavBar></NavBar>
    <Options></Options>
    <Chart></Chart>
    <Phones></Phones>
    </>
  )
}

export default App
