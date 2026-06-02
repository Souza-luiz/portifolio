import { Link } from "react-router-dom";
import projetos from "../data/projetos";
import "./projetos.css";

function Projetos() {
  return (
    <main className="home">
      <h1>Projetos</h1>

      <div className="grid">
        {projetos.map((p) => (
          <Link key={p.id} to={`/projeto/${p.id}`}>
            <div className="card">
              <h2>{p.nome}</h2>
              <p>{p.descricao}</p>

              <div className="techs">
                {p.tecnologias.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Projetos;