import axios from "axios";
import { useState } from "react";


const Register = () => {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');

    const submit = async e => {

        e.preventDefault()

        const new_user = {
            username: username,
            email:email,
            password1: password1,
            password2: password2,
        };
          const {data} =  await axios.post('http://localhost:8000/register/', new_user, {headers: {'Content-Type':'application/json'}}, {withCredentials: true});
          if (data === null){
            setError("Invalid Inputs")
          }

          else{
            window.location.href = '/login'
          }
    };
    
    
    return ( 

        <div className="place-items-center">
          <div className="bg-otter_image w-2/3 bg-center mx-10 my-5 h-60 bg-no-repeat bg-cover border-2 border-black desktop:h-96 desktop:w-1/3"></div>
        <form className="flex-col justify-center w-2/3 mx-20" onSubmit={submit}>
          <div>
            <h3 className="font-bold text-2xl text-center py-2 desktop:text-3xl">Register</h3>
            <div className="py-4">
              <input className="font-bold border-2 border-black w-full" 
                placeholder="Enter Username" 
                name='username'  
                type='text' value={username}
                required 
                onChange={e => setUsername(e.target.value)}/>
            </div>
            <div>
              <input className="font-bold border-2 border-black w-full" 
                placeholder="Enter Email" 
                name='email'  
                type='text' value={email}
                required 
                onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="py-4">
              <input name='password' 
                type="password"     
                className="font-bold border-2 border-black w-full"
                placeholder="Enter password"
                value={password1}
                required
                onChange={e => setPassword1(e.target.value)}/>
            </div>
            <div>
              <input name='confirm_password' 
                type="confirm_password"     
                className="font-bold border-2 border-black w-full"
                placeholder="Confirm password"
                value={password2}
                required
                onChange={e => setPassword2(e.target.value)}/>
            </div>
            <div className="text-red-500 font-bold py-1">{error}</div>
            <div className="text-center py-4">
              <button type="submit" 
                 className="border-2 border-black text-lg rounded-lg w-20 hover:bg-slate-500 hover:text-white">Register</button>
            </div>
            <div>Already have an account?<a className='text-blue-500 font-bold px-3' href="/login">Login Here</a></div>
          </div>
       </form>
     </div>

    );
}

export default Register