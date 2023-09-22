
async function GetUserCode (username) {
    
    try{
        const responseUserCode = await fetch(`http://localhost:8080/teminat_user_2/userCode?userName=${username}`, { method: 'GET'});

        const data = await responseUserCode.text();
        
        return data;
    }
    catch (error) {
        console.error('error in fetching data:', error);
    }
}

export default GetUserCode;




