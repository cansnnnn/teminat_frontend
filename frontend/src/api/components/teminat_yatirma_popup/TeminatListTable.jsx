import React from "react";

const TeminatListTable = ({...props}) => {
    // const data = [
    //     // { uye: "AKB", musteri: "Portföy", teminat_tipi: "NK" , kiymet_tanimi:"TL", para_birimi: "TL", adet: 3790229.180, fiyat: 1000000},
    //     // { uye: "AKB", musteri: "Portföy", teminat_tipi: "NK" , kiymet_tanimi:"TL", para_birimi: "TL", adet: 3790229.180, fiyat: 1000000}
    //  ]

    return(

        <div className="list_box">

            <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Üye</th>
                <th scope="col">Müşteri Portföy</th>
                <th scope="col">Teminat Tipi</th>

                <th scope="col">Kıymet Tanımı</th>
                <th scope="col">Para Birimi</th>
                <th scope="col">Adet</th>
                <th scope="col">Fiyat</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <th scope="row"> </th>
                            <td>{val.uye}</td>
                            <td>{val.musteri}</td>
                            <td>{val.teminat_tipi}</td>
                            <td>{val.kiymet_tanimi}</td>
                            <td>{val.para_birimi}</td>
                            <td>{val.adet}</td>
                            <td>{val.fiyat}</td>
                            
                        </tr>
                    )
                })}


            </tbody>
            </table>

    </div>
    )
}

export default TeminatListTable;