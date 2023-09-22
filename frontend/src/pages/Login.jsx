import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginDemand from "../api/Login";
import {Modal}  from 'react-bootstrap';

const Login = ({...props}) => {

    const navigate = useNavigate();

    const[loginUsername,setLoginUsername] = useState('');
    const[loginPassword,setLoginPassword] = useState('');
    const [showModel, setShowModel] = useState(false);
    
    
    const  loginFunc = async (username, password) => {
        //[0] -> login jwt
        //[1] -> yetki "true" or "false"
        var response=  await LoginDemand(username, password);
        
        if (response[0].length !== 0) {
            props.changeusername(loginUsername);
            props.ToSetIsLoggedin(true);

            if(response[1] === "true") {
                props.ToSetUserYetki(true);
            }
            else {
                props.ToSetUserYetki(false);
            }

            props.ToSetToken(response[0]);

            navigate("/teminat");
        }
    };
    return (

<div>

	<title>Sign up facundo farm & resort</title>


	<body>
	<div className="container-fluid">
		<div className="container">

			<h2 className="text-center" id="title">Teminat Yönetim Sistemi</h2>
            <br/>
            <hr/>
            <br/>
			
			<div className="row">
				
				<div className="col-md-2">
				</div>
				
				<div className="col-md-5">
						<fieldset>							
							<p className="text-uppercase"> Login using your account: </p>	
 								
							<div className= "form-group">
								<input type="email" name="username" id="username" className="form-control input-lg" placeholder="Kullanıcı Adı"

                                onChange={(e)=> {
                                    setLoginUsername(e.target.value);
                                }}/>
							</div>

                            <br/>

							<div class="form-group">
								<input type="password" name="password" id="password" className="form-control input-lg" placeholder="Şifre"
                                onChange={(e)=> {
                                    setLoginPassword(e.target.value);
                                }}/>
							</div>

                            <br/>

							<div>
                                <button className="button"  
                                onClick={() => { 
                                    loginFunc(loginUsername, loginPassword);
                                }} >
                                    LOGIN
                                </button>

                                <Modal  show={showModel}>
                                    <Modal.Body>
                                        <div >
                                            <div className="header">
                                                <label> Kullanıcı Adı ve Şifre Hatalı</label>
                                            </div>
                                            <br/>
                                            <div >
                                                <button class="button" onClick={() => {
                                                    setShowModel(false);
                                                    }}>
                                                    OK
                                                </button>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>

							</div>								 
 						</fieldset>
				</div>
			</div>
		</div>
	</div>
	</body>
	 


    </div>


    );
  };
  
  export default Login;