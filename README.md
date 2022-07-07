<h1 align="center">VLibras - React</h1>

<p align="center">
    Componente React para adicionar o <a href="https://www.gov.br/governodigital/pt-br/vlibras" target="_blank">VLibras</a> em sua aplicação
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/vlibras-react">
        <img
            src="https://img.shields.io/npm/v/vlibras-react?style=for-the-badge&color=005AFF&labelColor=0f0f0f"
            alt="version"
        />
    </a>
    <a href="https://github.com/cassiomaciell/vlibras-react/blob/main/LICENSE" target="_blank">
        <img
            src="https://img.shields.io/badge/license-MIT-%23d527f8?style=for-the-badge&color=ffae00&labelColor=0f0f0f"
            alt="license"
        />
    </a>
</p>

## Instalação

```bash
# pnpm
pnpm add vlibras-react
# yarn
yarn add vlibras-react
# npm
npm install vlibras-react
```

## Uso

```jsx
import "./app.css";
import VLibras from "vlibras-react";

function App() {
    return (
        <>
            <VLibras />
            <div className="app">...</div>
        </>
    );
}
export default App;
```

#### Customização

```jsx
import "./app.css";
import VLibras from "vlibras-react";

function App() {
    return (
        <>
            <VLibras personalization="https://example.com/vlibras.gov.br.json" opacity={0.5} />
            <div className="app">...</div>
        </>
    );
}
export default App;
```

#### Exemplo de configuração

- A logo precisa ser 200x200
- As cores são um RGB 0-1

  > X=R/255

  > Y=G/255

  > Z=B/255

  > **33, 70, 191 = "x": 0.12941, "y": 0.27451, "z": 0.74902**

```json
{
    "cabelo": { "x": 0.0, "y": 0.0, "z": 0.0, "w": 1.0 },
    "calca": { "x": 0.1098, "y": 0.1098, "z": 0.1098, "w": 1.0 },
    "camisa": { "x": 0.12941, "y": 0.27451, "z": 0.74902, "w": 1.0 },
    "corpo": { "x": 0.756, "y": 0.517, "z": 0.443, "w": 1.0 },
    "iris": { "x": 0.0, "y": 0.0, "z": 0.0, "w": 1.0 },
    "olhos": { "x": 1.0, "y": 1.0, "z": 1.0, "w": 1.0 },
    "sombrancelhas": { "x": 0.0, "y": 0.0, "z": 0.0, "w": 0.0 },
    "logo": "https://i.imgur.com/kn4c8sA.png",
    "pos": "center"
}
```

![Exemplo customização](https://i.imgur.com/L68Fe8q.png)

## License

Licensed under the MIT License

See [LICENSE](./LICENSE) for more information.
