function App() {
  return (
    <main>
      <nav>
        <strong>KSHAN Labs</strong>

        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#journal">Journal</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header>
  <p>KSHAN Labs</p>

  <h1>Learn. Build. Evolve.</h1>

  <p>
    A technology lab documenting the journey of learning,
    building, and creating with code.
  </p>

  <div className="hero-buttons">
    <a href="#projects">Explore Projects</a>
    <a href="#journal">Read Journal</a>
  </div>
</header>

      <section id="about">
        <h2>About</h2>
        <p>
          KSHAN Labs is a faceless technology brand focused on
          software development, experimentation, and continuous learning.
        </p>
      </section>

      <section id="projects">
  <h2>Projects</h2>

  <div className="project-card">
    <p className="project-label">Featured Project</p>

    <h3>KSHAN Labs Website</h3>

    <p>
      The first KSHAN Labs project — a technology website
      built while learning React, Vite, and modern web development.
    </p>

    <span>React</span>
    <span>Vite</span>
    <span>JavaScript</span>
  </div>
</section>

      <section id="journal">
        <h2>Tech Journal</h2>
        <p>
          Notes, tutorials, experiments, and lessons from the
          development journey.
        </p>
      </section>

      <section id="services">
        <h2>Services</h2>
        <p>
          Web development and technology solutions for individuals,
          creators, and businesses.
        </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>
          Interested in working together? Get in touch with KSHAN Labs.
        </p>
      </section>

      <footer>
        <p>© 2026 KSHAN Labs</p>
      </footer>
    </main>
  );
}

export default App;