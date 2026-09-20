import { useState } from "react";
import ReactMarkdown from "react-markdown";
const site = {
  name: "KSHAN Labs",
  tagline: "Learn. Build. Evolve.",
};
import "./App.css";

const posts = import.meta.glob("./posts/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});
const thoughtPosts = import.meta.glob("./posts/thoughts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function App() {
  return (
    <main>
    <nav>
  <a href="#top">{site.name}</a>

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
  <div className="journal-header">
    <div className="journal-label">
      <span>06</span>
      <span>JOURNAL</span>
    </div>

    <div className="journal-heading">
      <div>
        <span className="journal-kicker">FIELD NOTES / ARCHIVE</span>
        <h2>Notes from the lab.</h2>
      </div>

      <p>
        Experiments, lessons, ideas, and things I'm learning
        while building KSHAN Labs.
      </p>
    </div>
  </div>

  <div className="journal-list">
    <article className="journal-row">
      <span className="journal-index">001</span>

      <div className="journal-main">
        <span className="journal-meta">BUILD LOG</span>
        <h3>Building the KSHAN Labs Website</h3>
      </div>

      <span className="journal-date">SEP 2026</span>

      <a href="#journal-entry" className="journal-arrow">
        ↗
      </a>
    </article>

    <article className="journal-row">
      <span className="journal-index">002</span>

      <div className="journal-main">
        <span className="journal-meta">EXPERIENCE</span>
        <h3>My Linux Journey</h3>
      </div>

      <span className="journal-date">LINUX</span>

      <a href="#my-linux-journey" className="journal-arrow">
        ↗
      </a>
    </article>

    <article className="journal-row">
      <span className="journal-index">003</span>

      <div className="journal-main">
        <span className="journal-meta">THOUGHTS</span>
        <h3>Learning by Building</h3>
      </div>

      <span className="journal-date">001</span>

      <a href="#learning-by-building" className="journal-arrow">
        ↗
      </a>
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

<section id="building-kshan-labs" className="journal-entry">
  <a href="#journal" className="journal-back">
  ← Back to Journal
</a>
  <ReactMarkdown>{posts["./posts/building-kshan-labs.md"]}</ReactMarkdown>
</section>

<section id="my-linux-journey" className="journal-entry">
  <a href="#journal" className="journal-back">
  ← Back to Journal
</a>
  <ReactMarkdown>{posts["./posts/my-linux-journey.md"]}</ReactMarkdown>
</section>

<section id="learning-by-building" className="journal-entry">
  <a href="#journal" className="journal-back">
  ← Back to Journal
</a>  
  <ReactMarkdown>
    {thoughtPosts["./posts/thoughts/learning-by-building.md"]}
  </ReactMarkdown>
</section>

<section id="experiences">
  <div className="section-label">
    <span>07</span>
    <span>THOUGHTS & EXPERIENCES</span>
  </div>

  <div className="thoughts-intro">
    <div>
      <span className="thoughts-kicker">FIELD NOTES / PERSONAL LOG</span>

      <h2>
        Things learned
        <br />
        along the way.
      </h2>
    </div>

    <p>
      Not everything worth documenting is a finished project.
      These are the lessons, observations, mistakes, and questions
      that shape the way I learn and build.
    </p>
  </div>

  <div className="thoughts-list">
  {Object.entries(thoughtPosts).map(([path, content], index) => (
    <article className="thought" key={path}>
      <span className="thought-number">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div>
        <span className="thought-label">FIELD NOTE</span>

        <h3>
          {content
            .split("\n")
            .find((line) => line.startsWith("# "))
            ?.replace("# ", "") || "Untitled thought"}
        </h3>

        <p>
          {content
            .split("\n")
            .find(
              (line) =>
                line.trim() &&
                !line.startsWith("#") &&
                !line.startsWith(">")
            ) || "A note from the lab."}
        </p>

        <a href="#journal-entry" className="thought-link">
          Read thought ↗
        </a>
      </div>

      <span className="thought-arrow">↗</span>
    </article>
  ))}
</div>
</section>

      <section id="contact">
  <p>08 / CONTACT</p>

  <h2>Let's build.</h2>

  <p>
    Have a project idea, collaboration, or technology question?
    Get in touch with KSHAN Labs.
  </p>

  <a className="contact-button" href="mailto:kshanlabs00outlook.com">
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