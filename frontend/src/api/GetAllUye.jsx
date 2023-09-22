async function GetUyeFromBackend () {
    
        try{
            const response = await fetch('http://localhost:8080/teminat_uye_2/uyeler', {method:"GET"});

            if(!response.ok) {
                throw new Error ('network response is not ok')
            }

            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error('error in fetching data:', error);
        }

        
    

}

export default GetUyeFromBackend;