import { useContext, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"
import text from '../../assets/testedd.jpeg'


const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        navitage("/")
        alert('logged in successfully')
      })
      .catch((error) => {
        alert(error)
      });
  };

  return (
    <div className="boys">
    <section>
            <div className="register">
                <div className="col-1">
                    <h2>Sign In</h2>
                    <span>register and enjoy the service</span>
    
                    <form id='form' className='flex flex-col' onSubmit={handleLogin}>
                    <input
placeholder='Email'
value={email}
onChange={e => setEmail(e.target.value)}

/>
<input
type='password'
placeholder='Password'
value={password}
onChange={e => setPassword(e.target.value)}

/>
                 <button className='btn' onClick={handleLogin}>Sign In</button>
                    </form>
    
                </div>
                <div className="col-2">
                    <img src={text} alt="" />
                </div>
            </div>
        </section>
        </div>

  );
};

export default Login;
