import React from "react";
import axios from "axios";
import { atom, useAtom } from "jotai";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const sessionAtom = atom([]);

function LoginPage() {
<<<<<<< HEAD
  const [session, setSession] = useAtom(sessionAtom);
  const [networkStatus, setNetworkStatus] = useState("pending");
  let history = useHistory();

  const handleLogin = async (loginDetails) => {
    console.log("logindetails", loginDetails);
    await axios
      .post(`/api/session/`, loginDetails)
      .then((res) => {
        setSession(res.data);
        setNetworkStatus("resolved");
        history.push("/user/dashboard");
      })
      .catch(function (error) {
        console.log(error);
        setNetworkStatus("error");
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    handleLogin({ username: username, password: password });
  };

  console.log(session);

  return (
    <div>
      <h1> Login page </h1>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="username" />
=======
    const [session, setSession] = useAtom(sessionAtom)
    const [networkStatus, setNetworkStatus] = useState("pending")
    let history = useHistory()
    
    const handleLogin = async (loginDetails) =>{
        await axios.post(`/api/session/`, loginDetails)
        .then(res=>{
            setSession(res.data)
            setNetworkStatus("resolved")
            history.push("/user/dashboard");
        })
        .catch(function (error) {
            console.log(error)
            setNetworkStatus("error")
        })

    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const password = event.target.password.value;
        handleLogin({username: name, password: password})
    }
    
    if (session) { null } // empty code to prevent errors on session not being used.



    return (
        <div>
            <h1> Login page </h1>
        <form onSubmit={handleSubmit}>
        <input name="name" placeholder="name" />
>>>>>>> 337f737a3e5b24ac0630bb137c386994f21c3a5f
        <input name="password" placeholder="Password" />
        <button>Login</button>
      </form>
      {networkStatus === "error" ? (
        <div>
          <h1>Incorrect login details. Please try again</h1>
        </div>
      ) : null}
    </div>
  );
}

export default LoginPage;
