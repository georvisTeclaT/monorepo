import React from 'react';

import ImageLogin from './image-login/image-login';
import FormLogin from './form-login/form-login';

import './login.css';

export const Login = () => {
  return (
    <div id="containerLogin">
      <div className="contentFlex col-md-12">
        <div className="col-md-6">
          <FormLogin />
        </div>
        <div className="col-md-6">
          <ImageLogin />
        </div>
      </div>
    </div>
  )
};
