import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ImageLogin from './image-login/image-login';
import FormLogin from './form-login/form-login';
import './login.css';
export const Login = () => {
    return (_jsx("div", { id: "containerLogin", children: _jsxs("div", { className: "contentFlex col-md-12", children: [_jsx("div", { className: "col-md-6", children: _jsx(FormLogin, {}) }), _jsx("div", { className: "col-md-6", children: _jsx(ImageLogin, {}) })] }) }));
};
