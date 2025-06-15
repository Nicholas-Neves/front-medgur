
import moça from "../img/moçaCadastroParceiros.png";
import logo from "../img/logo-medgur-2.png";
import style from "../../App.module.css"
import styles from "../paginas/parceiros.module.css";

function Parceiro() {
  return (
    <>
      <main>
        <img className={styles.logo} src={logo} alt="" />
        <div className={styles.container_conteudo}>
          <div className={styles.mulher}>
            <img src={moça} alt="" />
          </div>
          <div className={style.login}>
            <form action="#" method="post">
              <div className={style.header_form}>
                <h1>Cadastro</h1>
                <button className={style.fechar}>X</button>
              </div>
              <div className={style.main_form}>
                <input type="text" className={style.campo} name="nome" placeholder="Nome da Farmacia" required />
              <br/>
              <input type="text" className={style.campo} name="email" placeholder="E-mail" required />
              <br/>
              <input type="text" className={style.campo} name="cnpj" placeholder="cnpj" required />
              <br/>
              <input type="password" className={style.campo} name="senha" placeholder="Senha" required />
              <br/>
              <input type="password" className={style.campo} name="confirmaSenha" placeholder="Confirme sua senha" required />
              <div className={styles.canto}>
              <p>Senha com 6 caractereres</p>
              <p>Senha com um número no minimo</p>
              </div>
              <button className={style.btn_enviar} type="submit">Criar conta</button>
              <a href="">
              <label for="lembrar">Ja tenho cadastro!</label>
              </a>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Parceiro;