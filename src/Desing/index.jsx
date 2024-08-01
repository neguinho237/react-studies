import style from './style.module.css'
import { useState } from "react";






export function Desing(){

    const [newnuber, setnuber] =useState(0);

     function aumentarNumber(){
        setnuber(newnuber + 1);

    }
    
    function diminuirNumber(){
        setnuber(newnuber - 1);

    }


    return(


       <div className={style.container}>
                <div className={style.quarePai}>
                    <div className={style.qProduto}>Quantidade de produto = <b>{newnuber}</b> 
                        <div className={style.paiButton}>
                            <button onClick={aumentarNumber}>Adicionar Produto </button>
                            <button onClick={diminuirNumber}>Tirar Produto </button>
                        </div>
                    </div>
                </div>
                </div>
        
    );
}