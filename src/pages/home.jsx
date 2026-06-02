import { useEffect, useState } from 'react';
import "./home.css";

function Home() {
    const [theme, setTheme] = useState(() => localStorage.getItem('home-theme') || 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('home-theme', theme);
    }, [theme]);

    return (
        <main className={`home ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>

            <button
                type="button"
                className="theme-toggle"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
            </button>

            <section className="hero">

                <h1>Luiz Pereira de Souza Neto</h1>

                <h2>Técnico em Desenvolvimento De Sistemas</h2>

                <p>
                    Desenvolvendo interfaces modernas,
                    responsivas e intuitivas.
                </p>

            </section>

            <section className="about">

                <h2>Sobre Mim</h2>

                <p>
                    Sou um jovem programador, tenho interesse em melhorar cada vez mais e crescer no mercado de trabalho.
                </p>

            </section>

            <section className="techs">

                <h2>Tech Stack</h2>

                <div className="tech-grid">

                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                 
                    <span>GitHub</span>

                </div>

            </section>

        </main>
    )
}

export default Home

