import React from 'react'
import TeminatMemberAndAssetType from './TeminatmemberAndAssetType';
import TeminatListTable from './TeminatListTable';
import TeminatBottomBox from './TeminatBottomBox';
import PostTeminatToBackend from '../../api/PostTeminat';
import { useState, useEffect } from 'react';
import GetAllKiymetNKFromBackend from "../../api/GetAllKiymetNK";


    //     "uyeId": "0ccbc899-d5e6-4f47-a794-56b1a98138b5",       --> props.uyeID burada var
    //     "kiymetNKId": "5471119b-def1-4a0e-9fd4-e8a9d9a3ebba",  --> kiymetNKId burada var
    //     "adet": 3,                                             --> adet burada var
    //     "onay": false,                                         --> defoult olarak false oluştururken
    //     "islemler": "deneme işlem",                            --> Yatırma olarak gir
    //     "degerlenmisTutar":100,                                --> degerlenmisTutar burada var
    //     "acıklama": "deneme açıklama"                          --> aciklama burada var

const TeminatPopup = ({close, ...props}) => {

  useEffect(() => {
    (async () => {
        setKiymetNKData(await GetAllKiymetNKFromBackend());
    })();
 }, []);

 const [teminatListTable, setTeminatListTabe] = useState([]);
 const [teminatPostList, setTeminatPostList] = useState([]);
  const [kiymetNKData, setKiymetNKData] = useState([]);
  const [aciklama, setAciklama] = useState('');
  const [adet, setAdet] = useState(0);
  const [degerlenmisTutar, setDegerlenmisTutar] = useState(0);
  const [kiymetNKId,setKiymetNKId] = useState('');
  const [tanim, setTanim] = useState('');
  const [PB, setPB] = useState('');
  const [fiyat, setFiyat] = useState(0);
  

  const ToSetAciklama = (e) => {setAciklama(e)}
  const ToSetAdet = (e) => {setAdet(e)}
  const ToSetDegerlenmisTutar = (fiyat, adet) => { setDegerlenmisTutar(adet * fiyat) }
  const ToGetKiymetNKId = (e) => { setKiymetNKId(e) }

  const ToSetTanım =(e) => { setTanim(e)}
  const ToSetPB = (e) => {setPB(e)}
  const ToSetFiyat = (e) => {setFiyat(e)}


  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  var today = new Date(),
  time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  return (

    <div >
        

            <div className="content">


              <div className="command-box">

                <div className="header">
                    <h2>Teminat Yatırma Ekranı</h2>
                </div>

                <br/>
                <br/>


                <div className="buttons-container">

                <button className="button"  onClick={() => { 

                  let newTeminatListTableRow = { uye: props.uyeKod, musteri: props.musteriPortfoy, teminat_tipi: "NK" , kiymet_tanimi:tanim, para_birimi: PB, adet: adet, fiyat: fiyat};
                  setTeminatListTabe([...teminatListTable,newTeminatListTableRow]);

                  var girisTarihi = date + "  " + time;

                  let newTeminatPostListrow = { uyeId: props.uyeID, kiymetNKId: kiymetNKId, adet: adet, onay: false, islemler: "Yatırma", 
                  degerlenmisTutar: degerlenmisTutar, acıklama: aciklama,
                  teminatıGiren: props.username, girisTarihi:girisTarihi, teminatıOnaylayan:"", onaylanmaTarihi:"",
                  islemTipi: "Yatırma"
                };
                  setTeminatPostList([...teminatPostList, newTeminatPostListrow]);
                  }} >
                    Ekle
                </button>

                <button className="button"  onClick={() => {     
                  PostTeminatToBackend( teminatPostList);
                  close();
              
                }} >
                Tüm Kayıtları Sakla
                </button>

                <button className="button" onClick={() => {console.log('modal closed '); close(); }}>
                  Vazgeç
                </button>

              </div>

            </div>

            <TeminatMemberAndAssetType uyeKod={props.uyeKod} hesapNo={props.hesapNo} unvan = {props.unvan} kiymetNKData={kiymetNKData}
                                        ToSetAciklama = {ToSetAciklama} ToSetAdet={ToSetAdet} ToSetDegerlenmisTutar={ToSetDegerlenmisTutar}
                                        degerlenmisTutar={degerlenmisTutar} ToGetKiymetNKId= {ToGetKiymetNKId} ToSetTanım={ToSetTanım}
                                        tanim = {tanim} ToSetPB= {ToSetPB} PB = {PB}  ToSetFiyat={ ToSetFiyat} fiyat={fiyat}/>
            <br/>
            <TeminatListTable data= {teminatListTable} />
            <br/>
            <TeminatBottomBox/>
            <br/>
          

        </div>

      </div>
  )
}

export default TeminatPopup;