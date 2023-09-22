import axios from 'axios';
import TeminatModel from '../models/TeminatModel.jsx'


async function GetTeminatByUyeIDFromBackend (uyeID) {

    let teminatModelArray = [];

        try{
            const response = await fetch(`http://localhost:8080/teminat_teminatlar_3/uyeIdTeminatlar/?uyeId=${uyeID}`, {method:"GET"});

            if(!response.ok) {
                throw new Error ('network response is not ok')
            }

            
            const data = await response.json();

            for (const item of data) {

                const teminatModel = new TeminatModel(item);
                const uyeResponse = await axios.get(`http://localhost:8080/teminat_uye_2/uyeByID?uyeId=${item.uyeID}`, {method:"GET"})

                teminatModel.uyeName = uyeResponse.data.uyeName;
                teminatModel.uyehesapNo = uyeResponse.data.hesapNo;
                teminatModel.uyemusteriPortfoy = uyeResponse.data.musteriPortfoy;
                teminatModel.uyeunvan = uyeResponse.data.unvan;

                const kiymetNKResponse =await axios.get(`http://localhost:8080/teminat_kiymet_NK/kiymetNKByID?kiymetNKId=${item.kiymetNKID}`, {method:"GET"} )
                    
                teminatModel.kiymetNKfiyat= kiymetNKResponse.data.fiyat;
                teminatModel.kiymetNKparaBirimi = kiymetNKResponse.data.paraBirimi;
                teminatModel.kiymetNKtanim = kiymetNKResponse.data.tanim;

                teminatModelArray= [...teminatModelArray, teminatModel];  
            }

            return teminatModelArray;
        }
        catch (error) {
            console.error('error in fetching data:', error);
        }

}

export default GetTeminatByUyeIDFromBackend;