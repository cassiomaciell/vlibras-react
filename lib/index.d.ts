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
declare function VLibras({ rootPath, personalization, opacity }: VLibrasProps): JSX.Element;
export default VLibras;
