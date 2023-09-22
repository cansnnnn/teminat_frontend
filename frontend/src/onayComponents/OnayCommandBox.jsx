import React from "react";
import  {useState, useEffect} from 'react';
import {AiOutlineSearch } from "react-icons/ai";
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal}  from 'react-bootstrap';
import 'bootstrap';

import GetUyeFromBackend from "../api/GetAllUye";


import NameListTableOnay from "./NameListTableOnay";
import OnayTable from "./OnayTable";
import UpdateOnayBackend from "../api/UpdateOnay";

import GetTeminatByUyeIdAndOnayPageFromBackend from "../api/GetTeminatByUyeIdAndOnayPage";


const OnayCommandBox = ({...props}) => {

    useEffect(() => {
        (async () => {
            setUyeData(await GetUyeFromBackend());
        })();
     }, []);

    const [uyeData,setUyeData] = useState([]);
    const [showModelUye, setShowModelUye]=useState(false);
    const [uyeID, setUyeID] = useState('');
    const [uyeKod, setUyeKod] = useState('');
    const [hesapNo, setHesapNo] = useState('');
    const [unvan,setUnvan] = useState('');
    const [selectedRowName, setSelectedRowName]=useState([]); //for name list onay
    const [selectedRowOnay, setSelectedRowOnay]=useState([]); //for onay table checks
    const [showModel,setShowModel] = useState(false);

    const [data, setData] = useState([]);

    const setDataEmpty = () => {setData([])}

    const handleCheckBoxChange = (event, rowData) => {
        if(event.target.checked) {
            setSelectedRowOnay([...selectedRowOnay, rowData]);
        }
        else{
            setSelectedRowOnay(selectedRowOnay.filter(row => row !== rowData));
        }
     }

    const handleRowSelect = (row, isSelected) => {
        if(isSelected) {
            setSelectedRowName([...selectedRowName,row ]);
        }
        else{
            setSelectedRowName(selectedRowName.filter((selectedRowName)=>selectedRowName !== row));
        }
     }





     //to get values from child
    //  to send as props in NameListTable     
     const NameListTamamFunction = () => {

        let len = selectedRowName.length;
        setUyeKod(uyeData[selectedRowName[len-1]].uyeName);
        setHesapNo(uyeData[selectedRowName[len-1]].hesapNo);
        setUnvan(uyeData[selectedRowName[len-1]].unvan);
        setUyeID(uyeData[selectedRowName[len-1]].id);
        //empty selected row for second try
        setSelectedRowName([]);
     }
     
    return (
        
        <div className="general_div">
        <div className="command-box">

            <div className="header">
                <h2>Teminat Onaylama Ekranı</h2>
            </div>

            <div className="buttons-container">
            <button className="button"  onClick={() => { 
                
                (async () => {
    
                    setData(await GetTeminatByUyeIdAndOnayPageFromBackend(uyeID)??[]);            
                        
                })();

                }} >
                Listele
            </button>

            <button className="button"  onClick={() => { 
                if(selectedRowOnay.length === 0) {
                    alert("Lütfen seçim yapınız.")
                }
                else {
                    setShowModel(true);
                }
                
                }} > Onayla </button>

            <Modal  show={showModel}>
                <Modal.Body>
                    <div >
                        <div className="header">
                            <label> Onaylamak istediğinize emin misiniz? </label>
                        </div>
                        <br/>
                        <div >
                            <button class="button" onClick={() => { 
                                
                                selectedRowOnay.forEach( (element) => {
                                    var teminatID = element.teminatID;
                                    var teminatıOnaylayan = props.username + " - " + uyeKod  + "/" + hesapNo;
                                    UpdateOnayBackend(teminatID, teminatıOnaylayan);
                
                
                                    //window.location.reload();
                                })
                                setShowModel(false);
                                
                                } } > OK </button>

                            <button class="button" onClick={() => { setShowModel(false) } } > Vazgeç </button>
                        </div>
                    </div>
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
                    <NameListTableOnay close={()=> setShowModelUye(false)} uyeKod = {uyeKod} hesapNo = {hesapNo} unvan = {unvan} handleRowSelect={handleRowSelect} 
                    uyeData={uyeData} NameListTamamFunction = {NameListTamamFunction}  setDataEmpty= {setDataEmpty}> </NameListTableOnay>
				</Modal.Body>
			</Modal>        


        </div>
        
        <div className="unvan" >
            <label className="input-group__label">Unvan: </label>
            <input type="text"  className="input-group__input" value={unvan}  />
        </div>

    </div>
   
    


    </div>

    <br/>
    <br/>

    <OnayTable handleCheckBoxChange = {handleCheckBoxChange} data= {data} />

    <br/>
    <br/>  

    {/* <label>{selectedRowOnay.length}</label> */}

</div>
    )
}

export default OnayCommandBox;