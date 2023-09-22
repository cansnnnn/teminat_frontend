import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../src/Routes/Navbar';
import Login from './pages/Login';
// import { ROUTES } from './Routes/Routes';
import Home from './pages/Home';
import Teminat from './pages/Teminat';
import Onay from './pages/Onay';
import { useState ,useEffect,  useNavigate } from 'react';

import TokenCheck from './api/TokenCheck';
import GetUserCodeToken from './api/GetUserCodeToken';
import GetYetki from './api/GetYetki';
import GetUserNameFromUserCode from './api/GetUsernameFromUserCode';

const App = () => {

	//const navigate = useNavigate();

	
    useEffect(() => {
        (async () => {

			const storedToken = localStorage.getItem('token');
	
			const tokenCheck = await TokenCheck(storedToken);
	
			if(storedToken !== null) {

				if(tokenCheck) {
					const userCodeToken = await GetUserCodeToken(storedToken);
					const userYetkiToken = await GetYetki(userCodeToken);
					const userNameToken = await GetUserNameFromUserCode (userCodeToken);
					setIsLoggedin(true);
					setUsername(userNameToken);
					setUserYetki(userYetkiToken);

					console.log("tokens: ", userNameToken, "-", userYetkiToken, "- ",storedToken)

					//navigate('/teminat')

				}
			}           
            
        })();
     }, []);
    



  const [username, setUsername] = useState('');
  const [userYetki, setUserYetki] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

  const changeusername = (newUsername) =>{ 
	setUsername(newUsername);	};

  const ToSetUserYetki = (e) => {
	setUserYetki(e);
	};

  const ToSetIsLoggedin = (e) => {setIsLoggedin(e)};


  const ToSetToken = (e) => {
	localStorage.setItem('token', e);
  }

	
	return (

		<BrowserRouter> 
			<Navbar username= {username} userYetki = {userYetki} isLoggedin={isLoggedin}  ToSetIsLoggedin={ ToSetIsLoggedin} 
					ToSetUserYetki={ ToSetUserYetki} changeusername = {changeusername}/>
			<Routes>
				<Route path={'/'} element={<Home username = {username} isLoggedin={isLoggedin} />}></Route>
				<Route path={'login'} element={<Login username= {username} changeusername = {changeusername}  ToSetUserYetki={ ToSetUserYetki} 
                                                    ToSetIsLoggedin={ ToSetIsLoggedin}
													ToSetToken = {ToSetToken} />}></Route>
				<Route
					path={'/teminat'}
					element={<Teminat username= {username} userYetki = {userYetki}/>}
				></Route>
				<Route
					path={'/onay'}
					element={<Onay username= {username} userYetki = {userYetki} />}
				></Route>
			</Routes>
    </BrowserRouter> 
	);
};

export default App;
