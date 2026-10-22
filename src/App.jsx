import { useEffect, useState } from "react";

const profile = {
  name: "Takshika Verma",
  role: "Software Developer",
  city: "Indore, India",
  email: "takshikaverma612@gmail.com",
  phone: "+91 9399597577",
  linkedin: "https://www.linkedin.com/in/takshika-verma-0267602a8/",
  summary:
    "I build websites and web apps with React, Node.js, PHP and WordPress. I have 2 years of experience in custom functionality, bug fixing and website optimization, and I am comfortable on both the frontend and the backend.",
};

const skills = [
  { group: "Frontend", items: ["HTML", "CSS", "JavaScript (ES6)", "React.js"] },
  { group: "Backend", items: ["PHP", "Node.js", "Express.js", "REST APIs", "SQL", "MongoDB"] },
  { group: "CMS", items: ["WordPress", "Elementor", "Gutenberg", "Qubely", "Custom Post Types", "WooCommerce"] },
  { group: "Tools", items: ["Git", "GitHub", "AWS Lambda"] },
];

const projects = [
  {
    name: "ShopWave",
    type: "E-commerce website",
    tech: ["React", "Node.js", "Express"],
    points: [
      "Secure user authentication and authorization with JWT and bcrypt.",
      "Client-side routing with React Router for smooth page navigation.",
      "Frontend connected to backend APIs using Axios.",
      "Product search, filtering, sorting and pagination.",
    ],
  },
  {
    name: "Lexora",
    type: "Language learning platform",
    tech: ["React"],
    points: [
      "Reusable component architecture built with React.js.",
      "Contact forms and automated emails through EmailJS, with no backend needed.",
      "Form validation and error handling for reliable input processing.",
    ],
  },
  {
    name: "Law Firm Website",
    type: "Business website",
    tech: ["WordPress", "PHP", "Elementor"],
    link: "https://kglawteam.com/",
    points: [
      "Developed and customized a professional law firm website.",
      "Custom sections that show attorneys by category and blog content dynamically.",
      "Dynamic post sliders using the Smart Post Show plugin.",
    ],
  },
  {
    name: "HCIA",
    type: "Health Care Industry Association website",
    tech: ["WordPress", "PHP", "Elementor"],
    points: [
      "Developed and customized the site with PHP, WordPress and Elementor.",
      "Event calendars that list upcoming events dynamically.",
      "WPForms for contact forms, inquiry forms and user data collection.",
    ],
  },
];

const education = [
  { degree: "Master of Computer Science (MCS)", school: "Mata Jijabai PG College, Indore", uni: "Devi Ahilya Vishwavidyalaya University", year: "2023" },
  { degree: "Bachelor of Science (B.Sc.)", school: "Maharani Laxmi Bai PG College, Indore", uni: "Devi Ahilya Vishwavidyalaya University", year: "2021" },
];

function Typing({ words }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const t = setTimeout(() => {
      if (!del) {
        setText(w.slice(0, text.length + 1));
        if (text.length + 1 === w.length) setTimeout(() => setDel(true), 1200);
      } else {
        setText(w.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDel(false); setI((i + 1) % words.length); }
      }
    }, del ? 40 : 80);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return <span className="typing">{text}<span className="caret" /></span>;
}

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <>
      <header className="nav">
        <a className="brand" href="#top">TV</a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a className="pill" href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-text">
            <p className="hello">Hi, I'm</p>
            <h1>{profile.name}</h1>
            <p className="role">{profile.role} · {profile.city}</p>
            <p className="build">I build <Typing words={["React apps", "Node.js APIs", "WordPress websites", "clean user interfaces"]} /></p>
            <p className="lead">{profile.summary}</p>
            <div className="actions">
              <a className="btn primary" href="#projects">See my projects</a>
              <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="blob b1" /><div className="blob b2" />
            <pre className="code-card">
<span className="k">const</span> developer = {"{"}{"\n"}
{"  "}name: <span className="s">"Takshika Verma"</span>,{"\n"}
{"  "}stack: [<span className="s">"React"</span>, <span className="s">"Node.js"</span>,{"\n"}
{"    "}<span className="s">"PHP"</span>, <span className="s">"WordPress"</span>],{"\n"}
{"  "}experience: <span className="s">"2 years"</span>,{"\n"}
{"  "}location: <span className="s">"Indore"</span>,{"\n"}
{"  "}openToWork: <span className="k">true</span>,{"\n"}
{"}"};
            </pre>
          </div>
        </section>

        <section id="about" className="section reveal">
          <h2>About</h2>
          <div className="about">
            <p>
              I enjoy building responsive, easy-to-use web applications and solving real problems with clean,
              efficient code. I'm always learning new technologies and want to keep growing as a Full-Stack Developer.
            </p>
            <dl className="facts">
              <div><dt>Experience</dt><dd>2 years</dd></div>
              <div><dt>Company</dt><dd>Techera Business Software Solution</dd></div>
              <div><dt>Worked</dt><dd>May 2024 to Jun 2026</dd></div>
              <div><dt>Certification</dt><dd>Full Stack Web Development, Future Multimedia</dd></div>
            </dl>
          </div>
        </section>

        <section id="skills" className="section reveal">
          <h2>Skills</h2>
          <div className="skills">
            {skills.map((s) => (
              <div key={s.group} className="skill-group">
                <h3>{s.group}</h3>
                <ul className="chips">
                  {s.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section reveal">
          <h2>Projects</h2>
          <div className="projects">
            {projects.map((p) => (
              <article key={p.name} className="project">
                <div className="project-head">
                  <div>
                    <h3>{p.name}</h3>
                    <p className="type">{p.type}</p>
                  </div>
                  {p.link && (
                    <a className="visit" href={p.link} target="_blank" rel="noreferrer">Visit site</a>
                  )}
                </div>
                <ul className="points">
                  {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
                <ul className="chips small">
                  {p.tech.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section reveal">
          <h2>Education</h2>
          <div className="edu">
            {education.map((e) => (
              <div key={e.degree} className="edu-item">
                <span className="year">{e.year}</span>
                <div>
                  <h3>{e.degree}</h3>
                  <p>{e.school}</p>
                  <p>{e.uni}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact reveal">
          <h2>Let's work together</h2>
          <p>I'm looking for Software Developer and Full-Stack Developer roles. Send me a message.</p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
