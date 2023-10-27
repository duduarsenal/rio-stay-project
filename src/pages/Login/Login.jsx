import { useState } from "react";
import "./Login.css";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    function handleLogin(user, pass){
        if (!user || !pass){
            return console.log("Algo vazio")
        }
        
        //Validar os caracteres especiais e numeros
        // if (/[^a-zA-Z]+/g.test(user)){
        //     return console.log("Tem simbolos ou numeros ai")
        // }

        console.log("tudo ok chefe")
    }

  return (
    <main className="main-login">
      <div className="login-container">
        <div className="logo-text">
          <p>LO</p>
          <p>GO</p>
          <div>Sistema Rio Stay</div>
        </div>
        <div className="input-container">
          <div className="login input">
            <label htmlFor="">Usuario</label>
            <input type="text" onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="password input">
            <label htmlFor="">Senha</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)}/>
            {/* Olho para mostrar senha */}
          </div>
        </div>
        <button className="btn-entrar" onClick={() => handleLogin(username, password)}>Entrar</button>
      </div>
      <div style={{position: 'absolute', marginTop: '25px', marginLeft: '750px', display: 'flex', flexDirection: 'column', alignItems: 'end', justifyContent: 'center'}}>
        <p>{username}</p>
        <p>{password}</p>
      </div>
    </main>
  );
}
