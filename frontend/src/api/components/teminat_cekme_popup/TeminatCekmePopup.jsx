import React from 'react';
import { useState, useEffect } from 'react';
import GetTeminatByUyeIdAndOnayFromBackend from '../../api/GetTeminatByUyeIdAndOnay';
import 'bootstrap/dist/css/bootstrap.min.css';

const TeminatCekmePopup = ({close, ...props}) => {

    useEffect( ()=> {
        (async () => {
            setData(await GetTeminatByUyeIdAndOnayFromBackend(props.uyeID)??[]);
        }) ();
     }, []);

    const [data, setData] = useState([]);

    //const [cekilecekAdet, setCekilecekAdet] = useState(0);

    const [selectedRow, setSelectedRow] = useState([]);

    const [sendArray, setSendArray] = useState([]);

    const [cekilecekAdet, setCekilecekAdet] = useState(0);


    const handleCheckBoxChange = (event, rowData) => {
        let newElement = {acıklama: rowData.acıklama, adet: rowData.adet, degerlenmisTutar: rowData.degerlenmisTutar,
            girisTarihi: rowData.girisTarihi, islemTipi: "Çekme", islemler: "Çekme", kiymetNKID: rowData.kiymetNKID, kiymetNKfiyat: rowData.kiymetNKfiyat,
            kiymetNKparaBirimi: rowData.kiymetNKparaBirimi, kiymetNKtanim: rowData.kiymetNKtanim, onay:false, teminatıGiren: rowData.teminatıGiren, uyeID: rowData.uyeID,
            uyeName: rowData.uyeName, uyehesapNo: rowData.uyehesapNo, uyemusteriPortfoy: rowData.uyemusteriPortfoy, uyeunvan: rowData.uyeunvan, cekilecekAdet: cekilecekAdet,
            idOfCekilecek: rowData.teminatID }

        console.log("new element: ", newElement)
        if(event.target.checked) {
            setSelectedRow([...selectedRow, rowData]);
        }
        else{
            setSelectedRow(selectedRow.filter(row => row !== rowData));
        }

        console.log(selectedRow);
     }

    //handle click
    //if row çekilecek adet != 0
    //add this to a new array
    //make çekilecek id , bunun id si
    //send post at the end of the function . send array

    const handleSaklaClick = () => {

        selectedRow.forEach(element => {
            
            if (element.cekilecekAdet !== 0) {
                console.log(element)
            }
        });
    }



  return (




    <div >              

        <div className="content">

            <div className="command-box">

                <div className="header">
                    <h2>Teminat Çekme Ekranı</h2>
                </div>

            <br/>
            <br/>

            <div className="buttons-container">

                <button className="button"  onClick={() => { alert("clicked");  close();  }} >
                     Tüm Kayıtları Sakla 
                </button>

                <button className="button" onClick={() => {close(); }}>
                    Vazgeç
                </button>

            </div>

            </div>

            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <div className="teminat_H">
                            <label  className="input-group__label">Üye Kod / Hesap No: </label>
                            <input  type="text" className="input-group__input"  value={props.uyeKod + "/" + props.hesapNo}/>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div className="teminat_H">
                            <label  className="input-group__label">Unvan: </label>
                            <input type="text" className="input-group__input" value = {props.unvan}/>
                        </div>
                    </div>
                    <div class="col-sm"> </div>
                </div>
            </div>

            <br/>
            <br/>


            <div className="list_box">

                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Üye</th>
                        <th scope="col">Teminat Tipi</th>
                        <th scope="col">Kıymet Tanımı</th>
                        <th scope="col">Para Birimi</th>
                        <th scope="col">Adet</th>
                        <th scope="col">Fiyat</th>
                        <th scope="col">Değerlenmiş Tutar</th>
                        <th scope="col">Çekilecek Adet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <th scope="row"><input class="form-check-input" type="checkbox"
                                    onChange={(e) => { 
                                        handleCheckBoxChange(e, val);
                                     }}
                                     /></th>
                                    <td>{val.uyeName + "/" + val.uyehesapNo}</td>
                                    <td>{"Nakit"}</td>
                                    <td>{val.kiymetNKtanim}</td>
                                    <td>{val.kiymetNKparaBirimi}</td>
                                    <td>{val.adet}</td>
                                    <td>{val.kiymetNKfiyat}</td>
                                    <td>{val.degerlenmisTutar}</td>
                                    <td> <input className="input-group__input" placeholder= {val.adet} 
                                             onChange={(e)=> {
                                                setCekilecekAdet(parseFloat(e.target.value))
                                             }}    
                                                />    </td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>

            </div>

        </div>

    </div>
  )
}

export default TeminatCekmePopup;