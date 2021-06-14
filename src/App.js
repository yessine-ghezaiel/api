import './App.css';
import UserList from './Components/UserList';
import React, { useState, useEffect } from "react";
import axios from "axios"; 
import {  Route, Switch } from "react-router-dom";
import UserDetails from './Components/UserDetails';


function App() {
  useEffect(() => {
    fetchData();
  }, []);

const [userList, setUserList] = useState([]); 
const [errors, setErrors] = useState(null); 
const [loading, setLoading] = useState(false); 

const fetchData = async () => {

setLoading(true);
setTimeout(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/users") 
    .then((res) => {
        setUserList(res.data);
        setLoading(false);
    }) 
    .catch((err) => setErrors(err)); 
}, 1000);
};

  return (
    <div className="App">
          {/* <UserList userList={userList}  /> */}
      <Switch>
            <Route exact  path="/" render={(props)=><UserList {...props} userList={userList} loading={loading}></UserList>}></Route>
            <Route exact  path="/details/:id" render={(props)=><UserDetails {...props} userList={userList} ></UserDetails>}></Route>            
        </Switch>

    </div>
  );
}

export default App;
