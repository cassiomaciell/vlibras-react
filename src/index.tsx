import React, { useEffect } from "react";

interface VLibrasProps {
	/**
	 * BASE URL de arquivos usados pelo VLibras
	 */
	rootPath?: string;
	/**
	 * URL do arquivo de configurações do VLibras que permite modificar varias coisas, como cor da pele, cores das roupas, olhos e adicionar uma logo na camisa.
	 *
	 * Configuração usada pelo gov.br: https://vlibras.gov.br/config/default_logo.json.
	 *
	 * O VLibras só aceita se a conter vlibras.gov.br na URL! Basta nomear o arquivo como vlibras.gov.br.json ;)
	 * Exemplo: https://example.com/vlibras.gov.br.json
	 */
	personalization?: string | null;
	/**
	 * opacidade do fundo do widget 0-1
	 */
	opacity?: number;
}

function VLibras({ rootPath = "https://vlibras.gov.br/app", personalization = null, opacity = 0.5 }: VLibrasProps) {
	useEffect(() => {
		if (!window.VLibras) {
			const plugin = document.createElement("script");
			plugin.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
			plugin.onload = () => {
				if (window.VLibras) new window.VLibras.Widget(rootPath, personalization, opacity);
			};
			document.body.appendChild(plugin);
		}
	}, []);
	return (
		<>
			<div {...{ vw: "true" }} className="enabled">
				<div vw-access-button="true" className="active"></div>
				<div vw-plugin-wrapper="true">
					<div className="vw-plugin-top-wrapper"></div>
				</div>
			</div>
		</>
	);
}

export default VLibras;
