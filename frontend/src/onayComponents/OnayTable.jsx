import React from "react"
// import { useState, useEffect } from "react";
// import GetTeminatByUyeIdAndOnayPageFromBackend from "../api/GetTeminatByUyeIdAndOnayPage";


const OnayTable = ({...props}) => {

    

    return(

        <div className="list_box">

        <div><h2>Onay Bekleyenler</h2></div>
        <br/>

        <div className="table">
            <table class="table table-striped" > 
            <thead>
                <tr>
                    <th>#</th>
                    <th>Üye</th>
                    <th>Teminat Tipi</th>
                    <th>Kıymet Tanımı</th>
                    <th>Para Birimi</th>
                    <th>İşlem</th>
                    <th>Adet</th>
                    <th>Fiyat</th>
                    <th>Değerlenmiş Tutar</th>
                    <th>İşlem Tipi</th>
                    <th>Giriş Tarihi</th>
                    <th>Giriş Kullanıcısı</th>
                </tr>
            </thead>

            <tbody>
                {props.data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <th scope="row"> <input class="form-check-input" type="checkbox"
                                onChange={(e) => { 
                                props.handleCheckBoxChange(e, val);
                             }} />
                            </th>
                            <td>{val.uyeName + "/" + val.uyehesapNo}</td>
                            <td>{"Nakit "}</td>
                            <td>{val.kiymetNKtanim}</td>
                            <td>{val.kiymetNKparaBirimi}</td>
                            <td>{" "}</td>
                            <td>{val.adet}</td>
                            <td>{val.kiymetNKfiyat}</td>
                            <td>{val.degerlenmisTutar}</td>
                            <td>{" "}</td>
                            <td>{val.girisTarihi}</td>
                            <td>{val.teminatıGiren}</td>
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
