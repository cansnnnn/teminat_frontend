import React from "react"
// import { useState, useEffect } from "react";
// import GetTeminatByUyeIdAndOnayFromBackend from "../api/GetTeminatByUyeIdAndOnay";


const OnayTable = ({...props}) => {

    // useEffect(() => {
    //     (async () => {
    
    //         setData(await GetTeminatByUyeIdAndOnayFromBackend(props.uyeID)??[]);            
                
    //     })();
    // }, [props.uyeID]);
        
    
    // const [data,setData] = useState([]);

    

    return(

        <div className="list_box">

        <div><h2>Onay Bekleyenler</h2></div>
        <br></br>

        <div className="table">
            <table class="table table-striped" > 
            <thead>
                <tr>
                    <th scope="col">Üye</th>
                    <th scope="col">Müşteri Portföy</th>
                    <th scope="col">Teminat Tipi</th>
                    <th scope="col">Kıymet Tanımı</th>
                    <th scope="col">Para Birimi</th>
                    <th scope="col">Adet</th>
                    <th scope="col">Fiyat</th>
                    <th scope="col">İşlem Tipi</th>
                </tr>
            </thead>
            <tbody>
                {props.onayData.map((val, key) => {
                    console.log("value-->  ", val)
                    return (
                        <tr key={key}>
                            <td>{val.uyeName}</td>
                            <td>{val.uyemusteriPortfoy}</td>
                            <td>{"Nakit"}</td>
                            <td>{val.kiymetNKtanim}</td>
                            <td>{val.kiymetNKparaBirimi}</td>
                            <td>{val.adet}</td>
                            <td>{val.kiymetNKfiyat}</td>
                            <td>{val.islemTipi}</td>
                        </tr>
                    )
                })}

            </tbody>
            </table>
    </div>
    </div>
    )
}

export default OnayTable;
