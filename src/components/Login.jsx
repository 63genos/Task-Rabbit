import React, {useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function Login() {
    
    const [emaill, setEmaill] = useState("");
    const [pass, setpass] = useState("");
    const[logged, setLogged] = useState(false);
    
    const handleRegister = (email, pass) => {
        
    
        const register = createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
    
        const user = userCredential.user;
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
    });
    }

    const handleLogged = () => {
        setLogged(!logged);

    }
  return (
    <>
        
        <div className='flex gap-10 flex-col signup-page'>
                <h1>Register</h1>
                <input className='' onChange = {() => setEmaill(e.target.value)} type="text" name='email' placeholder='Enter your Mail Id'/>
                <input onChange = {() => setpass(e.target.value)}type="text" name='password' placeholder='Enter your Password'/>
                <button onClick={handleRegister}>Register</button>
                <input type="file" className='border-black my-auto ' />
            
        </div>
        <div className='divider'></div>
        <div className='login-page'>
        <h1>Login</h1>
              <input className='' onChange = {() => setEmaill(e.    target.value)} type="text" name='email' placeholder='Enter your Mail Id'/>
                <input type="text" name='password' placeholder='Enter your Password'/>
                <button onClick={handleLogged}>Login</button>
        </div>
    </>
    
  )
}
