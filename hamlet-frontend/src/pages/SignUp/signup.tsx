import React from 'react';
import '../../App.css';
import logo from '../../logo2.png';

function Signup() {
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
          <label className='label-signup'>NickName</label>
          <input type="text" className="input-signup" placeholder='NickName'/>
        </div>
        <div>
          <label className='label-signup'>Email</label>
          <input type="text" className="input-signup" placeholder='Email'/>
        </div>
        <div>
          <label className='label-signup'>Password</label>
          <input type="text" className="input-signup" placeholder='Password'/>
        </div>
        <div>
          <label className='label-signup'>Confirm</label>
          <input type="text" className="input-signup" placeholder='Confirm Password'/>
        </div>
        <div>
          <input type="submit" value='회원가입' className='signup-submit' />
        </div>
        <div>
          <input type="submit" value='돌아가기' className='signup-submit' />
        </div>
      </form>
    </div>
  );
}

export default Signup;