import './App.css'
import logo from './logo.jpg';
import {getFullYear, getFooterCopy} from './utils'

const App = () =>{
  return(
    <>
    <div className='App-header'>
      <img src={logo} alt='img'></img>
      <h1>School dashboard</h1>
    </div>

    <div className='App-body'>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>Email: </label> 
      <input type='email' name='email'></input>
      <label htmlFor='password'>Password: </label>
      <input type='password' name='password'></input>   
      <button type='button'>Ok</button>
    </div>

    <div className='App-footer'>
      <p>>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </div>
    </>
  )
}
export default App
