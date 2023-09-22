async function PostTeminatToBackend ( TeminatData) {

    // var teminatJSON = {
    //         "uyeId": uyeId,
    //         "kiymetNKId": kiymetNKId,
    //         "adet": adet,
    //         "onay": onay,
    //         "islemler":  islemler,
    //         "degerlenmisTutar": degerlenmisTutar,
    //         "acıklama": aciklama


    //         "teminatıGiren":
    //         "teminatıOnaylayan":
    //         "girisTarihi":
    //         "onaylanmaTarihi":
    // }



    TeminatData.forEach(async (element) => {
        try{
            const response = await fetch('http://localhost:8080/teminat_teminatlar_3/create', {
                  // Enter your IP address here
      
                  headers: {
                    accept: '*/*',
                    'Content-Type': 'application/json',
                },

                method: 'POST', 

                //mode: 'cors', 
                body: JSON.stringify(element) // body data type must match "Content-Type" header   
                }
                
                );
    
            if(!response.ok) {
                throw new Error ('network response is not ok')
            }
    
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error('error in fetching data:', error);
        }
    
    });

}

export default PostTeminatToBackend;
