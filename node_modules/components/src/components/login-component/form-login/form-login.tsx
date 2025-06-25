import React from "react";

import LogoToou from "../../logo-toou-component/logo-toou";

import './form-login.css';

function FormLogin() {
  return (
    <div className="row">

      <LogoToou />

      <div className="containerForm">

        <h2 className="titleLogin"> Login </h2>
        <p className="titleText"> <span>Insira seus dados para acessar o portal do</span> <strong>Toou</strong> </p>
      

        <div id="formLogin">

          <div className="contentCompo col-lg-12">
            <div className="contentCampo-label">
              <label htmlFor="email" className="">Usuário</label>
            </div>
            <div>
              <div className="contentCampo-input">
                <input placeholder="Informe seu usuário" id="email" autoComplete="on" data-cy="input-username" size={1} className="" type="text" name="email" />
              </div>
            </div>
          </div>

          <div className="contentCompo col-lg-12">
            <div className="contentCampo-label">
              <label htmlFor="password" className="">Senha</label>
            </div>
            <div>
              <div className="contentCampo-input">
                <input placeholder="Digite sua senha" id="password" autoComplete="new-password" data-cy="input-password" size={1} className="" type="password" name="password" aria-autocomplete="list" />
              </div>
              <div className="contentCampo-mostrarSenha" >
                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="none" data-cy="icon-OpenEyed" name="OpenEyed">
                  <path fill="#737373" d="M8 2.667c-3.636 0-6.742 2.261-8 5.454 1.258 3.193 4.364 5.455 8 5.455s6.742-2.262 8-5.455c-1.258-3.193-4.364-5.454-8-5.454Zm0 9.09a3.638 3.638 0 0 1-3.636-3.636A3.638 3.638 0 0 1 8 4.485a3.638 3.638 0 0 1 3.636 3.636A3.638 3.638 0 0 1 8 11.758ZM8 5.94a2.179 2.179 0 0 0-2.182 2.182c0 1.207.975 2.182 2.182 2.182a2.179 2.179 0 0 0 2.182-2.182A2.179 2.179 0 0 0 8 5.94Z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="contentCampo col-lg-12 mt-4">

            <div className="contentCampo-check row">
              <div className="form-check form-switch col-6 contentInput">
                <input className="form-check-input" type="checkbox" role="switch" id="inputCheckbox" />
                <label className="form-check-label" htmlFor="inputCheckbox">Manter-me conectado</label>
              </div>

              <a className="col-6 contentLink" data-cy="button-forgotPassword" >Esqueceu sua  senha?</a>
            </div>           

          </div>

          <button id="btnAcessar" type="submit" >
            <span>Acessar conta</span>
          </button>

          <div id="linkAcesso">
            <a href="#">Primeiro acesso</a>
          </div>

        </div>




      </div>
      
    </div>
  );
}

export default FormLogin;