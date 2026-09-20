function App() {
  return (
    <main>
      <nav>
        <strong>KSHAN Labs</strong>

        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#journal">Journal</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header>
        <p>KSHAN LABS / TECHNOLOGY JOURNAL</p>

        <h1>
          Learn.
          <br />
          Build.
          <br />
          Evolve.
        </h1>

        <p>
          A technology lab documenting experiments, projects,
          software development, Linux, and the continuous process
          of learning by building.
        </p>

        <div>
          <a href="#projects">Explore Projects</a>
          <a href="#journal">Read Journal</a>
        </div>
      </header>

      <section id="about">
        <p>01 / ABOUT</p>
        <h2>Building in public.</h2>

        <p>
          KSHAN Labs is a faceless technology brand focused on
          learning through practical projects, experimentation,
          documentation, and continuous improvement.
        </p>
      </section>

      <section id="projects">
  <p>02 / PROJECTS</p>
  <h2>Things being built.</h2>

  <div className="project-grid">
    <article className="project-card">
      <p className="project-number">01</p>

      <h3>KSHAN Labs Website</h3>

      <p>
        The first KSHAN Labs project — built while learning
        React, Vite, Git, GitHub, and modern web development.
      </p>

      <div className="project-tags">
        <span>React</span>
        <span>Vite</span>
        <span>Git</span>
        <span>GitHub</span>
      </div>
    </article>
  </div>
</section>

      <section id="journal">
  <p>03 / JOURNAL</p>
  <h2>Learn. Document. Share.</h2>

  <div className="journal-card">
    <p className="journal-meta">BUILD LOG / 001</p>

    <h3>Building the KSHAN Labs Website</h3>

    <p>
      Starting from a blank project and learning how React,
      Vite, Git, GitHub, and GitHub Pages work together.
    </p>

    <a href="#contact">Read build log →</a>
  </div>
</section>

      <section id="contact">
  <p>04 / CONTACT</p>

  <h2>Let's build.</h2>

  <p>
    Have a project idea, collaboration, or technology question?
    Get in touch with KSHAN Labs.
  </p>

  <a className="contact-button" href="mailto:YOUR-KSHAN-LABS-EMAIL">
    Contact KSHAN Labs →
  </a>
</section>

      <footer>
        <p>© 2026 KSHAN Labs</p>
        <p>Learn. Build. Evolve.</p>
      </footer>
    </main>
  );
}

export default App;