import React, { useState } from 'react';
import Styles from '../components/Chatbot.module.css'
import icone from '../img/anaum.png'
import anaAvatar from '../img/anaAvatar.png'

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <div className={Styles.floatingchatwrapper} onClick={() => setOpen(true)}>
          <span className={Styles.floatingchattooltip}>Precisa de ajuda? Clique aqui</span>
          <button aria-label="Abrir chat" className={Styles.floatingchatbutton}>
            <img src={icone} alt="Ícone do chat" />
          </button>
        </div>
      )}

            {open && (
        <>
          <div className={Styles.floatingchatblur} onClick={() => setOpen(false)}></div>

          <div className={Styles.floatingchatopened}>
            <div className={Styles.floatingchattop}>
              <img src={anaAvatar} alt="ana" className={Styles.ticoavatar} />
              <div className={Styles.toptext}>
                <h1>Ana</h1>
                <p>Te respondo imediatamente!</p>
              </div>
              <button className={Styles.closebtn} onClick={() => setOpen(false)}>×</button>
            </div>

            <iframe
              src="https://copilotstudio.microsoft.com/environments/Default-6f9e3b1e-1809-444a-81d3-82d40a928812/bots/cr747_medgur/webchat?__version__=2" frameborder="0"
              title="Copilot Chat"
              style={{ flexGrow: 1, border: 'none' }}
            />
          </div>
        </>
      )}
    </>
  );
}