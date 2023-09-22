
async function GetYetki (userCode) {
    
    try{
        const responseUserCode = await fetch(`http://localhost:8080/teminat_userPermission/check2?userCode=${userCode}`, { method: 'GET'});

        const data = await responseUserCode.text();
        
        return data;
    }
    catch (error) {
        console.error('error in fetching data:', error);
    }
}

export default GetYetki;




