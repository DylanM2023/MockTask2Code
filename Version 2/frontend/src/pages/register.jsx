import axios from "axios";
import { useState } from "react";


const Register = () => {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const submit = async e => {

        e.preventDefault()

        const new_user = {
            username: username,
            email:email,
            password1: password1,
            password2: password2,
        };

        const {data} =  await axios.post('http://localhost:8000/register/', new_user, {headers: {'Content-Type':'application/json'}}, {withCredentials: true});

        window.location.href = '/login'
    };
    
    
    return ( 

        <div>
        <form onSubmit={submit}>
          <div>
            <h3>Register</h3>
            <div>
              <label>Username</label>
              <input className="form-control mt-1" 
                placeholder="Enter Username" 
                name='username'  
                type='text' value={username}
                required 
                onChange={e => setUsername(e.target.value)}/>
            </div>
            <div>
              <label>Email</label>
              <input className="form-control mt-1" 
                placeholder="Enter Email" 
                name='email'  
                type='text' value={email}
                required 
                onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input name='password' 
                type="password"     
                className="form-control mt-1"
                placeholder="Enter password"
                value={password1}
                required
                onChange={e => setPassword1(e.target.value)}/>
            </div>
            <div>
              <label>Confirm Password</label>
              <input name='confirm_password' 
                type="confirm_password"     
                className="form-control mt-1"
                placeholder="Confirm password"
                value={password2}
                required
                onChange={e => setPassword2(e.target.value)}/>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" 
                 className="btn btn-primary">Submit</button>
            </div>
          </div>
       </form>
     </div>

    );
}

export default Register