import './LoginDetails.css';

function LoginDetails(props) {
  return (
    <div>
      <h2>Sign into your account</h2>
      <div className="LoginDetails">
        <label for="user"> Email Address: </label><br/>
        <input className="LoginInput" id="user" type='text' onChange={props.handleEmail} value={props.email} placeholder='Enter your email address...'/>
        <br/>
        <button className="LoginButton" onClick={() => props.attemptLogin(props.email)}>Sign in</button> 
      </div> 
    </div>
  );
}

export default LoginDetails;