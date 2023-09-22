import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState, useEffect } from "react";
// import GetTeminatByUyeIDFromBackend from "../api/GetteminatBYUyeID";




const ListTable = ({...props}) => {

    //  useEffect(() => {
    //     (async () => {

    //         setData(await GetTeminatByUyeIDFromBackend(props.uyeID)??[]);            
            
    //     })();
    //  }, [props.uyeID]);
    

    //  const [data,setData] = useState([]);

    

    return(

        <div className="list_box">

            <table class="table table-striped"  /*   onLoad={console.log("list içinde data:   " ,data)}  */    > 
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Üye</th>
                <th scope="col">Müşteri / Portföy</th>
                <th scope="col">Teminat Tipi</th>

                <th scope="col">Kıymet Tanımı</th>
                <th scope="col">Para Birimi</th>
                <th scope="col">Adet</th>
                <th scope="col">Fiyat</th>
                <th scope="col">İşlem Tipi</th>
                </tr>
            </thead>
            <tbody>
                {props.listData.map((val, key) => {
                    return (
                        <tr key={key}>
                            <th scope="row"><input class="form-check-input" type="checkbox"/></th>
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
    )
}

export default ListTable;