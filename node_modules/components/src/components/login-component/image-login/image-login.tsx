import React from "react";

const imagem = new URL('../../assets/img/login-background.png', import.meta.url).href;

import './image-login.css';


function ImageLogin() {
  return (
    <div className="row ">
        <div id="containerImg">
            <img src={imagem} alt="ImagemLogin" />
        </div>

        <div id="containerTitleImg">
          <div id="contentTilteImg">
            <h3 className="titleImg">Toou</h3>
            <h4 className="subtitleImg">Sua nova plataforma de viagens corporativas!</h4>
            <div id="contentBtn">
              <button type="button">
                <span>Saiba mais</span>
              </button>
            </div>
          </div>
        </div>


    </div>
  );
}

export default ImageLogin;