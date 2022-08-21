import Router from './Navigation/Router';
import Navbar from './Navigation/Navbar';
import './App.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import JoblyApi from "./API/api";
import jwtDecode from "jwt-decode"
import AuthContext from './Auth/AuthContext';


function App() {

  const [token, setToken] = useLocalStorage('token', null)
  const [currUser, setCurrUser] = useLocalStorage('currUser', null);
  const [applicationIds, setApplicationIds] = useState(new Set([]))
  const storedToken = localStorage.getItem('token')
  const navigate = useNavigate();

  const login = async (username, password) => {
          let token = await JoblyApi.getToken(username, password)
          setToken(token)
      }

  const signup = async (username, password, firstName, lastName, email) => {
          let token = await JoblyApi.register(username, password, firstName, lastName, email)
          setToken(token)
      }

  const logout = () => {
      setToken(null)
      setCurrUser(null)
      setTimeout(() => {navigate('/')}, 50)
      
  }
  
  useEffect(() => {
      const getCurrUser = async () => {
          if(token) {
              try {
                  let {username} = jwtDecode(token)
                  JoblyApi.token = token
                  let user = await JoblyApi.getUserInfo(username);
                  setCurrUser(JSON.stringify(user))
                  setApplicationIds(new Set([...user.applications]))
              } catch (err) {
                  setCurrUser(null)
              }
          }
      }
      getCurrUser();
  }, [token, storedToken])

  const apply = async (username, jobId) => {
    try {
      await JoblyApi.apply(username, jobId)
      setApplicationIds([...applicationIds, jobId])
    }catch (err) {
      console.log(err)
    }
    
  }

  return (
    <AuthContext.Provider value={{currUser, setCurrUser, apply, applicationIds}}>
      <div className="App">
        <Navbar logout={logout} />
        <Router login={login} signup={signup} />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
