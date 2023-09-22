import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'


const Navbar = ({...props}) => {

	const navigate = useNavigate();
	const hideNavbar = !props.isLoggedin;

	return (
		<nav className='navbar navbar-expand navbar bg mb-5'>

			<Link to='' className='ms-3 navbar-brand' >
				Takasbank
			</Link>

			<div className="col-xs-6 col-md-1"></div>

			<div className='container-fluid' 
            hidden={hideNavbar}
            >
			<div>
				<button
					onClick={() => navigate("teminat")}
					className='button_nav'
				>
					Teminat Yatırma / Çekme 
				</button>
				
				<button 
					onClick={() => navigate("onay")}
					className='button_nav'
					hidden={
						!props.userYetki
					}
				>
					Teminat Onay
				</button>
			</div>
				
			<div>
				<button
					onClick={() =>  {
						props.changeusername("");
						props.ToSetUserYetki(false);
						props.ToSetIsLoggedin(false);
						localStorage.removeItem('token');
						navigate("login");
					}
					}
					className='button_nav'
				>
					Çıkış 
				</button>
				
			</div>


			</div>
		</nav>


	);
};

export default Navbar;
