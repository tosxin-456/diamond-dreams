import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();

  return (
    <>
      <section className="adminLogin">
        <h2>Hello!</h2>
        <form action="">
          <p>Please input your details</p>
          <label htmlFor="Name">Name</label>
          <input type="text" id="Name" placeholder="Name"/>
          <label htmlFor="pword">Password</label>
          <input type="password" id="pword" placeholder="Password" />
          <button onClick={()=>history('Dashboard')}>Continue</button>
        </form>
      </section>
    </>
  );
}
 
export default Login;