import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contato.css";

function Contato() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);
  const [loading, setLoading] = useState(false);

  async function enviar(e) {
    e.preventDefault();

    if (!nome || !email || !assunto || !mensagem) {
      setErro("Preencha todos os campos");
      return;
    }

    setErro("");
    setLoading(true);

    const templateParams = {
      from_name: nome,
      from_email: email,
      subject: assunto,
      message: mensagem,
    };

    try {
      await emailjs.send(
        "souza_2009",
        "template_z4w966j",
        templateParams,
        "6UMKLMXztayboRGdz"
      );

      setSucesso(true);

      setNome("");
      setEmail("");
      setAssunto("");
      setMensagem("");

      setTimeout(() => setSucesso(false), 3000);

    } catch (err) {
      console.error(err);
      setErro("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="contato-container">

      <div className="contato-card">

        <h1>Contato</h1>

        <p>Envie uma mensagem e eu responderei o quanto antes.</p>

        <form onSubmit={enviar} className="contato-form">

          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Assunto"
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)}
          />

          <textarea
            placeholder="Mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />

          {erro && (
            <p className="error-msg">{erro}</p>
          )}

          {sucesso && (
            <p className="success-msg">
              Mensagem enviada com sucesso!
            </p>
          )}

          <button
            type="submit"
            className="btn-enviar"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </button>

        </form>

      </div>

    </main>
  );
}

export default Contato;