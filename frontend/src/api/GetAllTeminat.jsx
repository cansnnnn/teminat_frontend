import axios from 'axios';
import TeminatModel from '../models/TeminatModel.jsx'


async function GetTeminatFromBackend () {

    let teminatModelArray = [];

        try{
            const response = await fetch(`http://localhost:8080/teminat_teminatlar_3/teminatlar`, {method:"GET"});

            if(!response.ok) {
                throw new Error ('network response is not ok')
            }

            
            const data = await response.json();

            data.forEach(item => {

                const teminatModel = new TeminatModel(item);

                axios.get(`http://localhost:8080/teminat_uye_2/uyeByID?uyeId=${item.uyeID}`, {method:"GET"})
                .then(uyeResponse => {
                    
                    //teminatModel.uye= uyeResponse;

                    teminatModel.uyeName = uyeResponse.data.uyeName;
                    teminatModel.uyehesapNo = uyeResponse.data.hesapNo;
                    teminatModel.uyemusteriPortfoy = uyeResponse.data.musteriPortfoy;
                    teminatModel.uyeunvan = uyeResponse.data.unvan;


                    axios.get(`http://localhost:8080/teminat_kiymet_NK/kiymetNKByID?kiymetNKId=${item.kiymetNKID}`, {method:"GET"} )
                    .then( kiymetNKResponse => {

                        //teminatModel.kiymetNK=kiymetNKResponse;

                        teminatModel.kiymetNKfiyat= kiymetNKResponse.data.fiyat;
                        teminatModel.kiymetNKparaBirimi = kiymetNKResponse.data.paraBirimi;
                        teminatModel.kiymetNKtanim = kiymetNKResponse.data.tanim;
                    })

                })

                teminatModelArray= [...teminatModelArray, teminatModel];                
            })
            return teminatModelArray;
        }
        catch (error) {
            console.error('error in fetching data:', error);
        }

}

export default GetTeminatFromBackend;