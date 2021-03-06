import illustrationImg from "../assets/images/illustration.svg";
import logoImage from "../assets/images/logo.svg";
import googleIconImage from "../assets/images/google-icon.svg";
import { useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import "../styles/auth.scss";
import { useAuth } from "../hooks/useAuth";

export function Home() {
  const history = useHistory();

  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/room/new");
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie uma sala de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real!</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImage} alt="LetMeAsk" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImage} alt="Logo do google" />
            Crie sua sala com Google
          </button>
          <div className="separator">Entre em uma sala</div>

          <form>
            <input type="text" placeholder="Digite o código da sala..." />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
