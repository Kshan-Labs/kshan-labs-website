function App() {
  return (
    <main>
      <nav>
        <strong>KSHAN Labs</strong>

        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#journal">Journal</a>
          <a href="#experiences">Experiences</a>
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

    <a href="#journal-entry">Read build log →</a>
  </div>
</section>

<section id="journal-entry">
  <p>BUILD LOG / 001</p>

  <h2>Building the KSHAN Labs Website</h2>

  <p>
    This is where the KSHAN Labs journey begins.
  </p>

  <p>
    The website started as a simple Vite project and gradually
    evolved while learning React, CSS, Git, GitHub, and GitHub
    Pages.
  </p>

  <p>
    The goal is simple: learn by building, document the process,
    and keep improving one project at a time.
  </p>

  <p>
    <strong>Stack:</strong> React · Vite · CSS · Git · GitHub
    Pages
  </p>
</section>

<section id="experiences">
  <p>04 / EXPERIENCES & THOUGHTS</p>

  <h2>Things I've learned along the way.</h2>

  <div className="experience-grid">
    <article className="experience-card">
      <p className="experience-number">01</p>
      <h3>Learning by Building</h3>
      <p>
        Notes about learning technology by creating real projects,
        solving problems, and documenting the process.
      </p>
    </article>

    <article className="experience-card">
      <p className="experience-number">02</p>
      <h3>Linux & Development</h3>
      <p>
        Experiences, discoveries, commands, workflows, and lessons
        from working with Linux and development tools.
      </p>
    </article>

    <article className="experience-card">
      <p className="experience-number">03</p>
      <h3>Thoughts & Ideas</h3>
      <p>
        Short thoughts, observations, ideas, and perspectives about
        technology, creativity, and continuous learning.
      </p>
    </article>
  </div>
</section>

      <section id="contact">
  <p>05 / CONTACT</p>

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