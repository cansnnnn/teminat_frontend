import React from "react";  

const TeminatBottomBox = () => {

    return (
        <div className="command-box">
            <di>

                <div className="input-group">

                    <div className="teminat_H">
                        <label  className="input-group__label">Toplam Değerlenmiş Teminat: </label>
                        <input  type="text" className="input-group__input" />
                    </div>

                    <div className="teminat_H">
                        <label  className="input-group__label">Bulundurması Gereken Marjin: </label>
                        <input  type="text" className="input-group__input" />
                    </div>

                </div> 
            </di>

            <di>
                <div className="input-group">

                    <div className="teminat_H">
                        <label  className="input-group__label">Teminat Fazlası: </label>
                        <input  type="text" className="input-group__input" />
                    </div>

                    <div className="teminat_H">
                        <label  className="input-group__label">Teminat Eksiği: </label>
                        <input  type="text" className="input-group__input" />
                    </div>
                    
                </div> 
            </di>
            
        </div>

    )
}

export default TeminatBottomBox;