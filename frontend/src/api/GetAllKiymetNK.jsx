async function GetAllKiymetNKFromBackend () {
    
        try{
            const response = await fetch('http://localhost:8080/teminat_kiymet_NK/kiymetNKler', {method:"GET"});

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

export default GetAllKiymetNKFromBackend;