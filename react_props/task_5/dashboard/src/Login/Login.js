import './Login.css'

const Login = () =>{
  return(
    <>
    
    <div className='App-body'>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>Email: </label> 
      <input type='email' name='email'></input>
      <label htmlFor='password'>Password: </label>
      <input type='password' name='password'></input>   
      <button type='button'>Ok</button>
    </div>
    
    </>
  )
}
export default Login
