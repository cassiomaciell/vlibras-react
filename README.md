# VLibras - React

Componente React para adicionar o [VLibras](https://www.gov.br/governodigital/pt-br/vlibras/) em sua aplicação

[![Last Release](https://img.shields.io/npm/v/vlibras-react.svg)](https://npm.im/vlibras-react)

## Instalação

### yarn

```sh
yarn add vlibras-react
```

### npm

```sh
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

### Você pode customizar o VLibras

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

### Exemplo de configuração

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