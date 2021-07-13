import React from "react";
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Slider = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const loginUser = async(e) =>{
    e.preventDefault();

    const res = await fetch('/signin', {
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            email,
            password
    })
});

const data = await res.json();

if(res.status === 400 || !data){
    window.alert("invalid login");
}
else{
    window.alert("login successfull");
    history.push('/');
}
}

  return (
        <div class="container d-flex justify-content-center">
    <div class="row my-5">
        <div class="col-md-6 text-left text-white lcol">
            <div class="greeting">
                <h3>Welcome to <span class="txt">Resumo</span></h3>
            </div>
            <h6 class="mt-3">let's light some fire and get the show on the road...</h6>
            <div class="footer">
                <div class="socials d-flex flex-row justify-content-between text-white">
                    <div class="d-flex flex-row"><i class="fab fa-linkedin-in"></i><i class="fab fa-facebook-f"></i><i class="fab fa-twitter"></i></div>
                </div>
            </div>
        </div>
        <div class="col-md-6 rcol">
            <form method="POST" class="sign-up">
                <h2 class="heading mb-4">Login</h2>
                
                <div class="form-group fone mt-2"> <i class="fas fa-envelope"></i>
        <input
          type="email"
          value={email}
          onChange={updateEmail}
          placeholder="Please enter your Email"
        /></div>
        <div class="form-group fone mt-2"> <i class="fas fa-lock"></i>
        <input
          type="password"
          value={password}
          onChange={updatePassword}
          placeholder="Please enter your password"
        /></div>
        <div className="form-group form-button">
        <input type="submit" name="Login" className="btn-get-started" value="Login" onClick={loginUser}/></div>
      </form>
    <h6 class="exist mt-4">Existing user? <span>
             <NavLink to="./Singup" className="btn-get-started">
                                      Singup
                                     </NavLink>
                 </span></h6>
         </div>
         </div>
         </div>

  );
}

export default Slider;