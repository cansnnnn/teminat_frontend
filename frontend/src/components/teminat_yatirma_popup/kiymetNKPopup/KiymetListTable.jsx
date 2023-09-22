import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const KiymetListTable = ({close, ...props}) => {

    return(

        <div>

            <div>
                <button className="button" onClick={() => { props.KiymetListTamamFunction(); close(); }}>
                  Tamam
                </button>
                <button className="button" onClick={() => {console.log('modal uye closed '); close(); }}>
                  Vazgeç
                </button>
            </div>


            <div className="list_box">

            <table id= "table" class="table table-striped" data-click-to-select="true">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Teminat Tipi</th>
                <th scope="col">Kıymet Tanımı</th>
                <th scope="col">Para Birimi</th>
                <th scope="col">Fiyat</th>
                </tr>
            </thead>
            <tbody>
                {props.kiymetNKData.map((val, key) => {
                    return (
                        <tr key={key} onClick={(e)=> props.handleRowSelectKiymet(key, e.target.parentElement.classList) }>
                            <th scope="row"><input class="form-check-input" type="radio" name="flexRadioDefault"/></th>
                            <td>Nakit</td>
                            <td>{val.tanim}</td>
                            <td>{val.paraBirimi}</td>
                            <td>{val.fiyat}</td>
                        </tr>
                    )
                })}


            </tbody>
            </table>
            </div>


        </div>


        
    )
}


export default KiymetListTable;