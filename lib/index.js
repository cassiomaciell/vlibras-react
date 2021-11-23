import React, { useEffect } from "react";
function VLibras({ rootPath = "https://vlibras.gov.br/app", personalization = null, opacity = 0.5 }) {
    useEffect(() => {
        if (!window.VLibras) {
            const plugin = document.createElement("script");
            plugin.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
            plugin.onload = () => {
                //@ts-ignore
                if (window.VLibras)
                    new window.VLibras.Widget(rootPath, personalization, opacity);
            };
            document.body.appendChild(plugin);
        }
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", Object.assign({}, { vw: "true" }, { className: "enabled" }),
            React.createElement("div", { "vw-access-button": "true", className: "active" }),
            React.createElement("div", { "vw-plugin-wrapper": "true" },
                React.createElement("div", { className: "vw-plugin-top-wrapper" })))));
}
export default VLibras;
