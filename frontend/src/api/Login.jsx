// import axios from 'axios';

import axios from "axios";
import GetUserCode from "./GetUserCode";
import GetYetki from "./GetYetki";


async function LoginDemand (username, password) {
    
    try{
        const userCode = await  GetUserCode(username);

        console.log("userCode in login api: ", userCode )

        let element = {userCode: userCode, password: password};

        const response = await fetch('http://localhost:8080/teminat_user_2/login', {
      
                headers: {
                accept: '*/*',
                'Content-Type': 'application/json',
            },

                method: 'POST', 
                body: JSON.stringify(element),
                mediaType: 'application/json', 
        });

        
        const data = await response.text();
    
        if(!response.ok) {
            throw new Error ('network response is not ok')
        }

        const yetki = await  GetYetki(userCode);

        console.log("yetki in login api: " , yetki);
        
        var returnList = [];
        
        returnList = [...returnList,data];
        returnList = [...returnList,yetki];

        console.log("return list in login api: ", returnList)

        return returnList;

    }
    catch (error) {
        console.error('error in fetching data:', error);
    }
}

export default LoginDemand;




