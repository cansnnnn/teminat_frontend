import { Navigate } from 'react-router-dom';

const Home = ({...props}) => {
	if (!props.isLoggedin) {
		return <Navigate to={"login"} />;
	}

	return (
		<div className='container'>
			<h6 className='p-3'>Welcome {props.username}</h6>
		</div>
	);
};

export default Home;