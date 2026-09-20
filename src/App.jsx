import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

const posts = import.meta.glob("./posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function App() {
  return (
    <main>
    <nav>
  <a href="#top">KSHAN LABS</a>

  <div className="nav-links">
    <a href="#exploring">Exploring</a>
    <a href="#projects">Projects</a>
    <a href="#activity">Activity</a>
    <a href="#stack">Stack</a>
    <a href="#journal">Journal</a>
    <a href="#experiences">Thoughts</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

      <section className="hero" id="top">
  <div className="hero-topline">
    <span>KSHAN LABS</span>
    <span>TECHNOLOGY / EXPERIMENTS / JOURNAL</span>
  </div>

  <div className="hero-main">
    <p className="hero-label">INDEPENDENT DIGITAL LAB</p>

    <h1>
      Learn.
      <br />
      Build.
      <br />
      <span>Evolve.</span>
    </h1>

    <div className="hero-description">
      <p>
        KSHAN Labs is a space for building things, exploring technology,
        documenting the process, and learning in public.
      </p>

      <div className="hero-actions">
        <a href="#projects">Explore projects ↗</a>
        <a href="#journal">Read the journal ↘</a>
      </div>
    </div>
  </div>

  <div className="hero-bottom">
    <span>LAB / 001</span>
    <span>BUILDING IN PUBLIC</span>
    <span>2026 →</span>
  </div>
</section>

      
      <section id="about" className="about-section">
  <div className="about-label">
    <span>01</span>
    <span>ABOUT KSHAN LABS</span>
  </div>

  <div className="about-manifesto">
    <p className="about-kicker">A DIGITAL LAB FOR CURIOSITY</p>

    <h2>
      Build first.
      <br />
      Understand later.
      <br />
      <span>Keep evolving.</span>
    </h2>

    <p className="about-description">
      KSHAN Labs is a personal technology laboratory focused on
      learning through experimentation, building useful things,
      and documenting the journey along the way.
    </p>
  </div>

  <div className="about-footer">
    <span>LEARN</span>
    <span>BUILD</span>
    <span>DOCUMENT</span>
    <span>EVOLVE</span>
  </div>
</section>
     <section id="exploring" className="exploring-section">
  <div className="exploring-header">
    <span>02</span>
    <span>CURRENTLY EXPLORING</span>
    <span>STATUS: ACTIVE</span>
  </div>

  <div className="exploring-title">
    <h2>Things I'm<br />curious about.</h2>

    <div className="exploring-signal">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div className="exploring-index">
    <div className="exploring-row">
      <span>01</span>
      <strong>LINUX</strong>
      <span>OPERATING SYSTEMS</span>
      <span>ACTIVE</span>
    </div>

    <div className="exploring-row">
      <span>02</span>
      <strong>WEB</strong>
      <span>REACT / VITE / CSS</span>
      <span>ACTIVE</span>
    </div>

    <div className="exploring-row">
      <span>03</span>
      <strong>AI</strong>
      <span>INTELLIGENT SYSTEMS</span>
      <span>EXPLORING</span>
    </div>

    <div className="exploring-row">
      <span>04</span>
      <strong>AUTOMATION</strong>
      <span>TOOLS / WORKFLOWS</span>
      <span>EXPLORING</span>
    </div>
  </div>
</section>

  <section id="projects" className="projects-section">
  <div className="projects-top">
  <div className="projects-label">
    <span className="projects-number">03</span>
    <p>SELECTED WORK</p>
  </div>

  <div className="projects-title">
    <span className="projects-kicker">A SMALL ARCHIVE OF</span>
    <h2>Things I've built.</h2>
  </div>
</div>

  <article className="project-main">
    <div className="project-index">PROJECT / 001</div>

    <div className="project-content">
      <div className="project-title">
        <span>01</span>
        <h3>KSHAN Labs<br />Website</h3>
      </div>

      <div className="project-description">
        <p>
          A digital laboratory for documenting experiments,
          learning technology, and building things from scratch.
        </p>

        <div className="project-meta">
          <span>REACT</span>
          <span>VITE</span>
          <span>CSS</span>
          <span>GITHUB</span>
        </div>

        <a
          href="https://github.com/Kshan-Labs/kshan-labs-website"
          target="_blank"
          rel="noreferrer"
        >
          View source ↗
        </a>
      </div>
    </div>
  </article>

  <div className="project-next">
    <span>02</span>
    <span>NEXT PROJECT</span>
    <strong>In development</strong>
    <span>→</span>
  </div>
</section>

<section id="activity">
  <div className="section-label">
    <span>04</span>
    <span>LAB ACTIVITY</span>
  </div>

  <div className="activity-intro">
    <h2>Always in progress.</h2>

    <p>
      A running record of experiments, discoveries, and small milestones
      from the lab.
    </p>
  </div>

  <div className="activity-list">
    <article className="activity-item">
      <span className="activity-date">SEP 2026</span>

      <div>
        <span className="activity-type">BUILD</span>

        <h3>Launched KSHAN Labs</h3>

        <p>
          Created the first version of the KSHAN Labs website and deployed
          it publicly with GitHub Pages.
        </p>
      </div>
    </article>

    <article className="activity-item">
      <span className="activity-date">SEP 2026</span>

      <div>
        <span className="activity-type">LEARN</span>

        <h3>Deepening my Linux workflow</h3>

        <p>
          Exploring Ubuntu, terminal workflows, development environments,
          and command-line tools.
        </p>
      </div>
    </article>

    <article className="activity-item">
      <span className="activity-date">ONGOING</span>

      <div>
        <span className="activity-type">EXPLORE</span>

        <h3>Learning modern web development</h3>

        <p>
          Experimenting with React, Vite, CSS, Git, and different ways
          of building for the web.
        </p>
      </div>
    </article>

    <article className="activity-item">
      <span className="activity-date">NEXT</span>

      <div>
        <span className="activity-type">EXPERIMENT</span>

        <h3>More projects coming</h3>

        <p>
          The lab is still young. New experiments and projects will be
          documented as they take shape.
        </p>
      </div>
    </article>
  </div>
</section>

<section id="stack">
  <p>05 / TOOLS & TECHNOLOGIES</p>

  <div className="stack-intro">
    <h2>The tools behind the work.</h2>
    <p>
      Technologies I'm learning, using, and experimenting with
      while building KSHAN Labs.
    </p>
  </div>

  <div className="stack-grid">
    <div className="stack-item">
      <span>01</span>
      <h3>Frontend</h3>
      <p>React · Vite · JavaScript · CSS · HTML</p>
    </div>

    <div className="stack-item">
      <span>02</span>
      <h3>Development</h3>
      <p>VS Code · Git · GitHub · npm · Terminal</p>
    </div>

    <div className="stack-item">
      <span>03</span>
      <h3>Systems</h3>
      <p>Ubuntu · Linux · Bash · CLI workflows</p>
    </div>

    <div className="stack-item">
      <span>04</span>
      <h3>Exploring</h3>
      <p>AI · Automation · APIs · Developer tooling</p>
    </div>
  </div>
</section>

 <section id="journal">
  <p>06 / JOURNAL</p>

  <div className="section-heading">
    <h2>Notes from the lab.</h2>
    <p>
      Experiments, lessons, ideas, and the things I'm learning
      while building KSHAN Labs.
    </p>
  </div>

  <div className="journal-grid">
    <article className="journal-card journal-featured">
      <div className="journal-number">001</div>

      <div>
        <p className="journal-meta">BUILD LOG / SEPTEMBER 2026</p>

        <h3>Building the KSHAN Labs Website</h3>

        <p>
          Starting from a blank project and learning how React,
          Vite, Git, GitHub, and GitHub Pages work together.
        </p>

        <a href="#journal-entry">Read build log →</a>
      </div>
    </article>

    <article className="journal-card">
      <div className="journal-number">002</div>

      <div>
        <p className="journal-meta">EXPERIENCE / LINUX</p>

        <h3>My Linux Journey</h3>

        <p>
          Learning the terminal, development environments,
          Git workflows, and a different way of working with computers.
        </p>

        <a href="#journal-entry">Read experience →</a>
      </div>
    </article>

    <article className="journal-card">
      <div className="journal-number">003</div>

      <div>
        <p className="journal-meta">THOUGHTS / 001</p>

        <h3>Learning by Building</h3>

        <p>
          Why building small things can be more valuable than
          waiting until you feel ready.
        </p>

        <a href="#experiences">Read thoughts →</a>
      </div>
    </article>
  </div>
</section>

<section id="journal-entry">
  <p>BUILD LOG / 001</p>

  {Object.entries(posts).map(([path, content]) => (
  <article key={path}>
    <ReactMarkdown>{content}</ReactMarkdown>
  </article>
))}

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
  <p>07 / EXPERIENCES & THOUGHTS</p>

  <div className="thoughts-intro">
    <h2>Things learned along the way.</h2>

    <p>
      Not everything worth documenting is a finished project.
      Sometimes the lessons, mistakes, and questions matter more.
    </p>
  </div>

  <div className="thoughts-list">
    <article className="thought">
      <span className="thought-number">01</span>

      <div>
        <span className="thought-label">BUILDING</span>
        <h3>Learning by building</h3>
        <p>
          Reading and watching tutorials can only take you so far.
          Building something forces you to understand how the pieces
          actually work together.
        </p>
      </div>

      <span className="thought-arrow">↗</span>
    </article>

    <article className="thought">
      <span className="thought-number">02</span>

      <div>
        <span className="thought-label">LINUX</span>
        <h3>A different relationship with the computer</h3>
        <p>
          Linux has made me more curious about what happens underneath
          the applications I normally use.
        </p>
      </div>

      <span className="thought-arrow">↗</span>
    </article>

    <article className="thought">
      <span className="thought-number">03</span>

      <div>
        <span className="thought-label">PROCESS</span>
        <h3>Progress does not need to be perfect</h3>
        <p>
          Projects change while they are being built. Learning to
          iterate instead of waiting for perfection is part of the process.
        </p>
      </div>

      <span className="thought-arrow">↗</span>
    </article>
  </div>
</section>

      <section id="contact">
  <p>08 / CONTACT</p>

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