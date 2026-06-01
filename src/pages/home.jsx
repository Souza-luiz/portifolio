import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from "../assets/logo.png"
import "./home.css"

function Home() {
    return (
        <main className="home">

            <section className="hero">

                <h1>Luiz Pereira de Souza Neto</h1>

                <h2>Desenvolvedor Front-End</h2>

                <p>
                    Desenvolvendo interfaces modernas,
                    responsivas e intuitivas.
                </p>

            </section>

            <section className="about">

                <h2>Sobre Mim</h2>

                <p>
                    Sou apaixonado por tecnologia e desenvolvimento web.
                    Estou constantemente estudando novas tecnologias e
                    aprimorando minhas habilidades para criar soluções
                    modernas e eficientes.
                </p>

            </section>

            <section className="techs">

                <h2>Tech Stack</h2>

                <div className="tech-grid">

                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>Git</span>
                    <span>GitHub</span>

                </div>

            </section>

        </main>
    )
}

export default Home

