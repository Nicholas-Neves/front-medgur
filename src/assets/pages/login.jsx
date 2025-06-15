import { useState } from "react";
import style from "./Login.module.css";
import moça from "../img/moça.png";
import logo from "../img/logo-medgur-2.png";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    email_login: "",
    senha_login: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://SEU_BACKEND_URL/api/login",
        formData
      );

      if (response.status === 200) {
        alert("Login realizado com sucesso!");
        // Aqui você pode redirecionar, salvar token no localStorage, etc.
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao fazer login. Verifique seu e-mail e senha.");
    }
  };

  return (
    <main className={style.main}>
      <img className={style.logo} src={logo} alt="Logo" />
      <div className={style.container_conteudo}>
        <div className={style.mulher}>
          <img className={style.mulher_img} src={moça} alt="Ilustração" />
        </div>
        <div className={style.login}>
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.header_form}>
              <h1 className={style.header_title}>Login</h1>
              <button className={style.fechar} type="button">
                X
              </button>
            </div>
            <div className={style.main_form}>
              <div className={style.container}>
                <input
                  type="email"
                  className={style.campo}
                  name="email_login"
                  placeholder="E-mail"
                  value={formData.email_login}
                  onChange={handleChange}
                  required
                />
                <br className={style.br} />
                <input
                  type="password"
                  className={style.campo}
                  name="senha_login"
                  placeholder="Senha"
                  value={formData.senha_login}
                  onChange={handleChange}
                  required
                />
                <div className={style.row}>
                  <div className={style.checkbox}>
                    <input
                      type="checkbox"
                      className={style.lembrar}
                      name="lembrar"
                    />
                    <label className={style.label} htmlFor="lembrar">
                      Lembrar minha senha
                    </label>
                  </div>
                  <label className={style.label}>Esqueci minha senha</label>
                </div>
                <button className={style.btn_enviar} type="submit">
                  Entrar
                </button>
                <a className={style.link} href="/">
                  <label className={style.label}>Não tem cadastro?</label>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default App;
