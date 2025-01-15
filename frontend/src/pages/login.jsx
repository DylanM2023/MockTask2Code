import axios from "axios";
import { useState } from "react";


const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const submit = async e => {

        e.preventDefault()
        setError('')
        try{
          const user = {
            email: email,
            password: password
        };

        const {data} =  await axios.post('http://localhost:8000/token/', user, {headers: {'Content-Type':'application/json'}}, {withCredentials: true});
        
        localStorage.clear();
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);

        axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
        window.location.href = '/'
        } catch(err){
            setError('Incorrect username or password')
        }};

    return ( 
        <div className="h-max w-auto">
          <div className="bg-landing_img w-auto mx-10 my-5 h-60 bg-no-repeat bg-cover border-2 border-black"></div>
          <form className="flex-col justify-center w-2/3 mx-20" onSubmit={submit}>
            <div>
              <h3 className="font-bold text-2xl text-center py-2">Sign In</h3>
              <div className="py-4">
                <input className="font-bold border-2 border-black w-full" 
                  placeholder="Enter Email" 
                  name='email'  
                  type='text' value={email}
                  required 
                  onChange={e => setEmail(e.target.value)}/>
              </div>
              <div>
                <input name='password' 
                  type="password"     
                  className="font-bold border-2 border-black w-full"
                  placeholder="Enter Password"
                  value={password}
                  required
                  onChange={e => setPassword(e.target.value)}/>
              </div>
              <div className="text-red-500 font-bold py-1">{error}</div>
              <div className="text-center">
                <button type="submit" 
                    className="border-2 border-black text-lg">Sign In</button>
              </div>
              <div>Don't have an account?<a className='text-blue-500 font-bold px-3' href="/register">Register Here</a></div>
            </div>
        </form>
      </div>

    );
}

export default Login