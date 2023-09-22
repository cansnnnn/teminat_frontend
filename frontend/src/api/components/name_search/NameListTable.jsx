import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';




const NameListTable = ({close, uyeKod,  ...props}) => {

    return(

        <div>

            <div>
                <button className="button" onClick={() => { 
                    props.NameListTamamFunction(); 
                    props.setListDataEmpty(); 
                    props.setOnayDataEmpty();
                    close(); 
                    }}>
                  Tamam
                </button>
                <button className="button" onClick={() => {close(); }}>
                  Vazgeç
                </button>
            </div>


            <div className="list_box">

            <table id= "table" class="table table-striped" data-click-to-select="true">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Üye</th>
                <th scope="col">Hesap No</th>
                <th scope="col">Unvan</th>
                </tr>
            </thead>
            <tbody>
                {props.uyeData.map((val, key) => {
                    return (
                        <tr key={key} onClick={(e)=> props.handleRowSelect(key, e.target.parentElement.classList) }>
                            <th scope="row"><input class="form-check-input" type="radio" name="flexRadioDefault"/></th>
                            <td>{val.uyeName}</td>
                            <td>{val.hesapNo}</td>
                            <td>{val.unvan}</td>
                        </tr>
                    )
                })}


            </tbody>
            </table>
            </div>


        </div>


        
    )
}


export default NameListTable;