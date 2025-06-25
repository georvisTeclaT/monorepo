import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const imagem = new URL('../../assets/img/login-background.png', import.meta.url).href;
import './image-login.css';
function ImageLogin() {
    return (_jsxs("div", { className: "row ", children: [_jsx("div", { id: "containerImg", children: _jsx("img", { src: imagem, alt: "ImagemLogin" }) }), _jsx("div", { id: "containerTitleImg", children: _jsxs("div", { id: "contentTilteImg", children: [_jsx("h3", { className: "titleImg", children: "Toou" }), _jsx("h4", { className: "subtitleImg", children: "Sua nova plataforma de viagens corporativas!" }), _jsx("div", { id: "contentBtn", children: _jsx("button", { type: "button", children: _jsx("span", { children: "Saiba mais" }) }) })] }) })] }));
}
export default ImageLogin;
