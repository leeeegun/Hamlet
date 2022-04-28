import React from 'react';
import '../../App.css';
import logo from '../../logo2.png';

function Login() {
  return (
    <div className="App-header">
      <form action="" className='form_'>
        <fieldset className='fieldset'>
          <img src={logo} className="form-logo" alt="logo" />
        </fieldset>
        <div className=''>
          <label className='label-signup'>Id</label>
          <input type="text" className="input-signup" placeholder='Id'/>
        </div>
        <div>
          <label className='label-signup'>Password</label>
          <input type="text" className="input-signup" placeholder='Password'/>
        </div>
        <div>
          <input type="submit" value='로그인' className='signup-submit' />
        </div>
        <div>
          <input type="submit" value='돌아가기' className='signup-submit' />
        </div>
      </form>
    </div>
  );
}
export default Login;