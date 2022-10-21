import React, { useState } from 'react';
import logo from './logo.svg'
import './App.css';
import LoadAndRender from './components/LoadAndRender/LoadAndRender';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';


function App() {
  const [user, set_user] = useState();
  return (
    <div className="App">
      <LoadAndRender
        promise={async () => {
          var requestOptions = {
            method: 'GET',
            redirect: 'follow' as RequestRedirect,
            credentials: 'include' as RequestCredentials,
          };
          var res = await fetch('https://teachcontent.herokuapp.com/auth/myProfile', requestOptions);
          const profile = await res.json();
          if (res.ok) {
            set_user(profile);
          }
        }}
      >
        {/* <Routes>
					<Route path='/' element={<Landing user={user} />} />
					<Route path='/login' element={<Login user={user} set_user={set_user} />} />
					<Route path='/signup' element={<Signup user={user} />} />
					<Route path='/select-class' element={<SelectClass user={user} />} />
					<Route path='/select-subject' element={<SelectSubject user={user} />} />
					<Route path='/learn-subject' element={<LearnSubject user={user} />} />
					<Route path='/content' element={<Content user={user} />} />
					<Route path='/profile' element={<Profile user={user} set_user={set_user} />} />
					<Route path='/logout' element={<Logout set_user={set_user} />} />
				</Routes> */}
        <Routes>
          <Route path='/teachcontent_panel' element = {<Landing user={user}/>} />
        </Routes>
        {/* <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div> */}
      </LoadAndRender>
    </div>
  );
}

export default App;
