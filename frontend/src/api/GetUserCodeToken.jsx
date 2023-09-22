async function GetUserCodeToken (token) {
    
    try{
        const response = await fetch(`http://localhost:8080/teminat_user_2/tokenUsername?token=${token}`, {method:"GET"});

        if(!response.ok) {
            throw new Error ('network response is not ok')
        }

        const data = await response.text();
        console.log("chek is: ", data)
        return data;
    }
    catch (error) {
        console.error('error in fetching data:', error);
    }

    


}

export default GetUserCodeToken;