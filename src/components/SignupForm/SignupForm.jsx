import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../service/authService'
import './SignupForm.css'

const SignupForm = (props) => {
  const navigate = useNavigate()
  const [message, setMessage] = useState([''])
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConf: '',
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    updateMessage('')
    try {
        const newUserResponse = await authService.signup(formData)
        props.setUser(newUserResponse.user)
          navigate('/dashboard')
    } catch (error) {
      updateMessage(error.message)
  };
}

  const { username, password, passwordConf } = formData;

  const isFormInvalid = () => {
    return !(username && password && password === passwordConf);
  };

  return (
    <main className="shared-container createAccountBox">
      <h1>Create<br/>Account</h1>
      <p className="message_box">{message}</p>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="name"
            value={username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirm">Confirm Password:</label>
          <input
            type="password"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="submit-button signUpbtn" disabled={isFormInvalid()}>Sign Up</button>
          <Link to="/">
            <button className="signUpbtn">Back</button>
          </Link>
        </div>
      </form>
    </main>
  );
};


export default SignupForm;