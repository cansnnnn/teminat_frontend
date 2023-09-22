import React from "react";  
import './CommandBox.css';

const BottomBox = () => {

    return (
        <div className="command-box">
                <div className="input-group">
                        <label className="input-group__label">Toplam Değerlenmiş Teminat: </label>
                        <input className="input-group__input"/>
                </div> 

                <div className="input-group">
                        <label className="input-group__label">Bulundurması Gereken Marjin: </label>
                        <input className="input-group__input" />
                </div>
                    
            
                <div className="input-group">
                        <label className="input-group__label">Teminat Fazlası: </label>
                        <input className="input-group__input"/>
                </div> 

                <div className="input-group">

                        <label className="input-group__label">Teminat Eksiği: </label>
                        <input className="input-group__input"/>
                </div> 
            
        </div>

    )
}

export default BottomBox;