import { useParams } from "react-router-dom";
import projetos from "../data/projetos";
import "./projeto.css"
function Projeto() {
  const { id } = useParams();

  const projeto = projetos.find((p) => p.id === id);

  if (!projeto) {
    return <h1>Projeto não encontrado</h1>;
  }

  return (

    <main className="home">

      <h1>{projeto.nome}</h1>

      <p><strong>Objetivo:</strong> {projeto.objetivo}</p>

      <h3>Funcionalidades</h3>
      <ul>
        {projeto.funcionalidades.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      
      <h3>Desafios</h3>
      <p>{projeto.desafios}</p>

      <h3>Aprendizados</h3>
      <p>{projeto.aprendizados}</p>

      <div className="project-links">
        <a className="project-link" href="https://github.com/Souza-luiz/portifolio" target="_blank">GitHub</a>
        <a className="project-link" href="https://portifolio-teal-alpha-95.vercel.app" target="_blank">Deploy</a>
      </div>

    </main>
    
  );
}

export default Projeto;