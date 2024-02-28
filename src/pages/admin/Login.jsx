import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginIn , setLoginIn] = useState(false) 
  const error = document.querySelector('#errorMessage');
  const constructFormData = () => {
    return {
      email: email,
      password: password
    };
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginIn(true);
    const formData = constructFormData();
    console.log(formData);
  
    try {
      const response = await fetch('https://diamondreams.onrender.com/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        const data = await response.json();
        setEmail('');
        setPassword('');
        setLoginIn(false);
        localStorage.setItem('token', JSON.stringify(data));
        history('Dashboard')
      } else {
        setEmail('');
        setPassword('');
        setLoginIn(false);
        const data = await response.json();
        console.error('Failed to submit form data:', data);
        error.innerHTML = data
      }
    } catch (error) {
      setLoginIn(false);
      console.error('Error submitting form data:', error);
      error.innerHTML = 'Connect to a network and try again'; // Assuming `error` is a state variable
    }
  };
  

  return (
    <>
      <section className="adminLogin">
        <h2>Hello!</h2>
        <form onSubmit={handleSubmit}>
          <p>Please input your details</p>
          <label htmlFor="Email" >Email</label>
          <input type="text" id="Name" placeholder="Email" value= {email}  onChange={e => setEmail(e.target.value)}/>
          <label htmlFor="pword">Password</label>
          <input type="password" id="pword" placeholder="Password" value={password}  onChange={e => setPassword(e.target.value)} />
          <button disabled={loginIn}>{loginIn ? 'Login you in...' : 'Continue'}</button>
          <p id="errorMessage"></p>
        </form>
      </section>
    </>
  );
}
 
export default Login;