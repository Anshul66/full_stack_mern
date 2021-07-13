import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


const Home =() =>{
    const[ userName , setUserName]=useState("");
    const[show,setShow] =useState(false);

    const userHomePage = async()=>{
        try{

        const res=await fetch("/getdata", {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            },
        });

        const data = await res.json();
	console.log(data);
	setUserName(data.name);
    setShow(true);
        
}catch (err){
        console.log(err);
    }
}
useEffect(()=>{
    userHomePage();
}, []);

    return(
        <>
        <section id="header" className="d-flex align-items-centre">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1><strong className="brand-name">WELCOME { userName }</strong> { show ? 'happy to see you again' : 'SIR/MAAM' }</h1>
                            <h2 className="my-3">This project is designed by Anshul Gupta(1830081)</h2>
                            <div className="mt-3">
                                <NavLink to="./Login" className="btn-get-started">
                                    Get Started
                                    </NavLink>
                                    </div>
                            </div>
                            <div className="col-lg6 order-1 order-lg-2 header-img">
                                <img src="https://th.bing.com/th/id/OIP.kk-kawNmcPJYxMTLlImphAHaFx?w=265&h=206&c=7&o=5&pid=1.7" className="img-fluid animated" alt="home img"></img>
                            </div>
                            </div> 
                          
                                
            
            </div>
            </div>
            </div>
            </section>
       </> 
    );
};

export default Home;