import React from "react";
import './CommandBox.css';
import './button.css';
import  {useState, useEffect} from 'react';
import {AiOutlineSearch } from "react-icons/ai";
import './button.css';
import 'reactjs-popup/dist/index.css';
import TeminatPopup from "./teminat_yatirma_popup/TeminatPopup";
import 'bootstrap/dist/css/bootstrap.min.css';
import NameListTable from "./name_search/NameListTable";
import {Modal}  from 'react-bootstrap';
import 'bootstrap';
import GetUyeFromBackend from "../api/GetAllUye";
import ListTable from "./ListTable";
import OnayTable from "./OnayTable";
import GetTeminatByUyeIDFromBackend from "../api/GetteminatBYUyeID";
import GetTeminatByUyeIdAndOnayFromBackend from "../api/GetTeminatByUyeIdAndOnay";

import TeminatCekmePopup from "./teminat_cekme_popup/TeminatCekmePopup";




const CommandBox = ({...props}) => {

    useEffect(() => {
        (async () => {
            setUyeData(await GetUyeFromBackend());
        })();
     }, []);

    const [uyeData,setUyeData] = useState([]);

    const[showModelTeminat, setShowModelTeminat]=useState(false);
    const[showModelUye, setShowModelUye]=useState(false);
    const [uyeID, setUyeID] = useState('');
    const [uyeKod, setUyeKod] = useState('');
    const [hesapNo, setHesapNo] = useState('');
    const [unvan,setUnvan] = useState('');
    const [kiymet, setkiymet] = useState('');
    const [musteriPortfoy, setMusteriPortfoy] = useState('');
    const [selectedRow, setSelectedRow]=useState([]);
    const [listData,setListData] = useState([]);
    const [onayData,setOnayData] = useState([]);

    const [showModelTeminatCekme, setShowModelTeminatCekme] = useState(false);
    

    const setListDataEmpty = () => {setListData([])}
    const setOnayDataEmpty = () => {setOnayData([])}

    const handleRowSelect = (row, isSelected) => {
        if(isSelected) {
            setSelectedRow([...selectedRow,row ]);
        }
        else{
            setSelectedRow(selectedRow.filter((selectedRow)=>selectedRow !== row));
        }

     }

     //to get values from child
    //  to send as props in NameListTable     
     const NameListTamamFunction = () => {

        let len = selectedRow.length;
        setUyeKod(uyeData[selectedRow[len-1]].uyeName);
        setHesapNo(uyeData[selectedRow[len-1]].hesapNo);
        setUnvan(uyeData[selectedRow[len-1]].unvan);
        setUyeID(uyeData[selectedRow[len-1]].id);
        setMusteriPortfoy(uyeData[selectedRow[len-1]].musteriPortfoy);

        //empty selected row for second try

        setSelectedRow([]);
     }

     
    return (
        
        <div className="general_div">
        <div className="command-box">

            <div className="header">
                <h2>Teminat Yatırma / Çekme</h2>
            </div>

            <div className="buttons-container">

            <button className="button"  onClick={() => {
                //alert('clicked'); 
                
                    (async () => {
            
                        setListData(await GetTeminatByUyeIDFromBackend(uyeID)??[]);            
                        
                    })();

                    (async () => {
                    
                        setOnayData(await GetTeminatByUyeIdAndOnayFromBackend(uyeID)??[]);            
                                
                    })();
                    
                 
                }} >
                Listele
            </button>

            <button className="button" onClick={()=> setShowModelTeminat(true)}> Teminat Yatırma </button>


            <Modal size='xl' show={showModelTeminat}>
				<Modal.Body>
                    <TeminatPopup close={()=> setShowModelTeminat(false)} uyeKod = {uyeKod} hesapNo = {hesapNo} kiymet = {kiymet} 
                                                                            unvan = {unvan} uyeID= {uyeID} musteriPortfoy={musteriPortfoy}
                                                                            username = {props.username}>  </TeminatPopup>
				</Modal.Body>
			</Modal>


            <button className="button"  onClick={() => { setShowModelTeminatCekme(true) }} >
            Teminat Çekme
            </button>

            <Modal size='xl' show={showModelTeminatCekme}>
				<Modal.Body>
                    <TeminatCekmePopup close={()=> setShowModelTeminatCekme(false)} uyeKod = {uyeKod} hesapNo = {hesapNo} unvan = {unvan} uyeID= {uyeID} username = {props.username} >  </TeminatCekmePopup>
				</Modal.Body>
			</Modal>

            </div>
            
        </div>

        <br/>
        <br/>

    <div className="box">

    <div className="member">
        <div className="container-member">
            <div className="input-group">
                <label className="input-group__label">Üye Kod: </label>
                <input  className="input-group__input" value={uyeKod} onChange={(e) => setUyeKod(e.target.value)}/>                  

            </div>

            <div className="input-group">
                <label className="input-group__label">Hesap No: </label>
                <input className="input-group__input" value={hesapNo} onChange={e => setHesapNo(e.target.value)} />
            </div>                    

            <button className="button" onClick={()=> {
                    setShowModelUye(true);
                }}>
                <AiOutlineSearch/>
            </button>

            <Modal size='xl' show={showModelUye} >
				<Modal.Body>
                    <NameListTable close={()=> setShowModelUye(false)} uyeKod = {uyeKod} hesapNo = {hesapNo} unvan = {unvan} handleRowSelect={handleRowSelect} 
                    uyeData={uyeData} NameListTamamFunction = {NameListTamamFunction} 
                    setListDataEmpty = {setListDataEmpty} setOnayDataEmpty = {setOnayDataEmpty} > </NameListTable>
				</Modal.Body>
			</Modal>        


        </div>
        
        <div className="unvan" >
            <label className="input-group__label">Unvan: </label>
            <input type="text"  className="input-group__input" value={unvan}  />
        </div>

    </div>
   
    <div class="col-xs-6 col-md-1"></div>
    

    <div className="kiymet_select">

        <label  className="input-group__label">Kıymet Tipi: </label>

        <select   class="form-select form-select-lg col-md-6"  onChange={(e) => {setkiymet(e.target.value)}} >
            <option value="Nakit">Nakit</option>
        </select>
    </div>

    </div>

    <br/>
    <br/>


    <ListTable listData={listData}/>

    <br/>
    <br/>

    <OnayTable onayData = {onayData} />
    

</div>
    )
}

export default CommandBox;