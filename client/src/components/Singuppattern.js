import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from 'react-router-dom';
import { NavLink } from "react-router-dom";


const CardDisplay=()=>{
    const history = useHistory();
    const[user, setUser]=useState({
        name: "", email: "", password: "", cpassword: ""
    });
    let name,value;

    const Postdata = async(e)=>{
        e.preventDefault();

        const { name, email, password, cpassword }=user;

        const res=await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({

                name, email, password, cpassword
            })
        })
        const data = await res.json();

        if(data.status === 422 || !data) {
            window.alert("Invalid Regestration");
            console.log("Invalid Regestration");
        } else {
            window.alert("Regestration Successfull");
            console.log("Regestration Successfull");
            history.push("./Login");
        }

    }

    const handleInputs =(e) =>{
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
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
                <h2 class="heading mb-4">Sign up</h2>
                <div class="form-group fone mt-2"> <i class="fas fa-user"></i> <input type="name" name="name" class="form-control" 
                value={user.name}
                onChange={handleInputs}
                placeholder="Name" /> </div>
                <div class="form-group fone mt-2"> <i class="fas fa-envelope"></i> <input type="email" name="email" class="form-control" 
                value={user.email}
                onChange={handleInputs}
                placeholder="Work email" /> </div>
                <div class="form-group fone mt-2"> <i class="fas fa-lock"></i> <input type="password" name="password" class="form-control" 
                value={user.password}
                onChange={handleInputs}
                placeholder="Password" /></div>
                <div class="form-group fone mt-2"> <i class="fas fa-lock"></i> <input type="password" name="cpassword" class="form-control" 
                value={user.cpassword}
                onChange={handleInputs}
                placeholder="Confirm Password" />
                    <div class="image"><i class="fas fa-eye"></i></div>
                </div>
            <div className="form-group form-button">
            <input type="submit" name="singup" className="form-submit" value="Register" onClick={Postdata} />            </div>
            </form> 
            <h6 class="exist mt-4">Existing user? <span>
            <NavLink to="./Login" className="btn-get-started">
                                     LOGIN
                                    </NavLink>
                </span></h6>
        </div>
        </div>
    </div>
  );
}

export default CardDisplay;