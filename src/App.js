import React, { useState } from "react";

const USUARIO_PADRAO = "admin";
const SENHA_PADRAO = "1234";

export default function App() {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const autenticar = () => {
    if (usuario === USUARIO_PADRAO && senha === SENHA_PADRAO) {
      setLogado(true);
    } else {
      alert("Usuário ou senha incorretos!");
    }
  };

  if (!logado) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Login</h2>
        <input
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button onClick={autenticar}>Entrar</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Organograma de Produção</h1>
      <p>Sistema acessado com sucesso!</p>
    </div>
  );
}
