import { useState } from "react";
import moça from "../img/moçaCadastro.png";
import logo from "../img/logo-medgur-2.png";
import style from "./Login.module.css";
import styles from "./usuario.module.css";
import axios from "axios";

function Usuario() {
  const [formData, setFormData] = useState({
    nome_usuario: "",
    email_usuario: "",
    senha_usuario: "",
    confirmacao_usuario: "",
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

  if (formData.senha_usuario !== formData.confirmacao_usuario) {
    alert("As senhas não conferem!");
    return;
  }

  try {
    const response = await axios.post(
      "https://api-medgur-production.up.railway.app/medgur/cadastro",
      formData
    );
    console.log("✅ RESPOSTA DO BACK:", response);
    alert("Cadastro realizado com sucesso!");
  } catch (error) {
    console.log("❌ ERRO AO CADASTRAR:", error);
    if (error.response) {
      console.log("➡️ Status:", error.response.status);
      console.log("➡️ Data:", error.response.data);
      alert(`Erro ao cadastrar: ${error.response.data?.message || "Erro desconhecido"}`);
    } else {
      alert("Erro desconhecido. Veja o console.");
    }
  }
};

  return (
    <main className={styles.main}>
      <img className={styles.logo} src={logo} alt="Logo" />
      <div className={styles.container_conteudo}>
        <div className={styles.mulher}>
          <img className={styles.img_mulher} src={moça} alt="Ilustração" />
        </div>
        <div className={style.login}>
          <form className={styles.form_usuario} onSubmit={handleSubmit}>
            <div className={style.header_form}>
              <h1 className={styles.titulo}>Cadastro</h1>
              <button className={style.fechar} type="button">
                X
              </button>
            </div>
            <div className={style.main_form}>
              <input
                type="text"
                className={styles.campo}
                name="nome_usuario"
                placeholder="Nome completo"
                value={formData.nome_usuario}
                onChange={handleChange}
                required
              />
              <br className={styles.br} />
              <input
                type="email"
                className={styles.campo}
                name="email_usuario"
                placeholder="E-mail"
                value={formData.email_usuario}
                onChange={handleChange}
                required
              />
              <br className={styles.br} />
              <input
                type="password"
                className={styles.campo}
                name="senha_usuario"
                placeholder="Senha"
                value={formData.senha_usuario}
                onChange={handleChange}
                required
              />
              <br className={styles.br} />
              <input
                type="password"
                className={styles.campo}
                name="confirmacao_usuario"
                placeholder="Confirme sua senha"
                value={formData.confirmacao_usuario}
                onChange={handleChange}
                required
              />
              <div className={styles.canto}>
                <p className={styles.requisito}>Senha com no mínimo 6 caracteres</p>
                <p className={styles.requisito}>Senha com pelo menos um número</p>
              </div>
              <button className={style.btn_enviar} type="submit">
                Criar conta
              </button>
              <a className={styles.link_login} href="/">
                <label className={styles.label_login}>Já tenho cadastro!</label>
              </a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Usuario;