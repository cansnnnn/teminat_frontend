import React from "react";
import {AiOutlineSearch } from "react-icons/ai";
import './Teminat.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal}  from 'react-bootstrap';
import { useState } from "react";
import KiymetListTable from "./kiymetNKPopup/KiymetListTable";



const TeminatMemberAndAssetType = ({...props}) => {

    const[showModelKiymet, setShowModelKiymet]=useState(false);
    const [selectedRowKiymet, setSelectedRowKiymet]=useState([]);

   
    const KiymetListTamamFunction = () => {
        let len = selectedRowKiymet.length
       props.ToSetFiyat(props.kiymetNKData[selectedRowKiymet[len-1]].fiyat);
        props.ToSetPB(props.kiymetNKData[selectedRowKiymet[len-1]].paraBirimi);
        props.ToSetTanım(props.kiymetNKData[selectedRowKiymet[len-1]].tanim);

        props.ToGetKiymetNKId(props.kiymetNKData[selectedRowKiymet[len-1]].id);
        //empty selected row for second try
        setSelectedRowKiymet([]);
     }

     const handleRowSelectKiymet = (row, isSelected) => {
        if(isSelected) {
            setSelectedRowKiymet([...selectedRowKiymet,row ]);
        }
        else{
            selectedRowKiymet(selectedRowKiymet.filter((selectedRowKiymet)=>selectedRowKiymet !== row));
        }
     }

    return(

        <div className="box">
            


            <div> 
                <div className="teminat_H">
                    

                    <label  className="input-group__label">Üye Kod / Hesap No: </label>
                    <input  type="text" className="input-group__input" value={props.uyeKod + "/" + props.hesapNo}/>
                </div>


                    <div className="teminat_H">
                        <label  className="input-group__label">Unvan: </label>
                        <input type="text" className="input-group__input" value = {props.unvan}/>
                    </div>
            </div>

            <div>
                <label className="input-group__label_kiymet">Kıymet Bilgisi:</label>
                <div className="kiymet_bilgisi">
                    <select  class="form-select" >
                        <option value="Nakit">Nakit</option>
                        <option value="Altin">Altın</option>
                    </select>
                    <input type="text" value = {props.tanim} className="input-group__input"/>

                    <button className="button" onClick={()=> setShowModelKiymet(true) }>
                        <AiOutlineSearch className="icon_button"/>
                    </button>

                    <Modal size='xl' show={showModelKiymet} >
                        <Modal.Body>
                            <KiymetListTable close = {() => setShowModelKiymet(false)}  kiymetNKData = {props.kiymetNKData} KiymetListTamamFunction={KiymetListTamamFunction} 
                                handleRowSelectKiymet={handleRowSelectKiymet} fiyat= {props.fiyat} PB={props.PB} tanim={props.tanim} > 
                            </KiymetListTable>
                        </Modal.Body>
                    </Modal>


                </div>

                <div className="teminat_H">
                    <label  className="input-group__label">Para Birimi: </label>
                    <input  type="text" value = {props.PB} className="input-group__input" />
                </div>


            </div>

            <div> 
                <div className="teminat_H">
                    <label  className="input-group__label">Açıklama: </label>
                    <input  type="text" className="input-group__input" onChange={(e)=> {
                        props.ToSetAciklama(e.target.value)
                    }}/>
                </div>


                    <div className="teminat_H">
                        <label  className="input-group__label">Fiyat: </label>
                        <input type="text" value = {props.fiyat} className="input-group__input" />
                    </div>
            </div>

            <div> 
                <div className="teminat_H">
                    <label  className="input-group__label">Adet: </label>
                    <input  type="text" className="input-group__input" onChange={(e) => {
                        props.ToSetAdet(parseFloat(e.target.value));
                        props.ToSetDegerlenmisTutar(parseFloat(props.fiyat), parseFloat(e.target.value))
                    } }/>
                </div>

                    <div className="teminat_H">
                        <label  className="input-group__label">Değerlenmiş Tutar: </label>
                        <input type="text" className="input-group__input"  value={props.degerlenmisTutar} readOnly/>
                    </div>
            </div>
            
        </div>

    )
}

export default TeminatMemberAndAssetType;