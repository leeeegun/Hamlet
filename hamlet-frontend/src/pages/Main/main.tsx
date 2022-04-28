import React from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
import '../../App.css';
//import Login from '../Auth/login';

function Main() {
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <input type="text" placeholder="코드입력" className="input-code"></input>
          <br/>
          <input type="submit" value="Submit" className="input-code" style={{ backgroundColor: '#3A342F', color:"#F2E9DF" }}></input>
          <br/>
          <Link to="/login">로그인</Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/signup">회원가입</Link>
        </div>
      </header>
    </div>
  );
}
export default Main;