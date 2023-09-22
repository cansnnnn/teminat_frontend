async function UpdateOnayBackend (teminatID, teminatıOnaylayan) {

    //console.log(teminatID, "  -  ", teminatıOnaylayan);

    try{

        const response = await fetch(`http://localhost:8080/teminat_teminatlar_3/updateOnay?teminatID=${teminatID}&teminatıOnaylayan=${teminatıOnaylayan}`, { method:"POST" });

            if(!response.ok) {
                throw new Error ('network response is not ok')
            }

    }
    catch (error) {
        console.error('error in fetching data:', error);
    }
    

}

export default UpdateOnayBackend;