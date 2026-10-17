import { FaArrowLeft, FaPrint } from "react-icons/fa";
import {
  profile,
  skills,
  education,
  experience,
  projects,
  services,
} from "../data";

const alsoUsing = [
  "Git",
  "GitHub",
  "Vite",
  "REST APIs",
  "Supabase",
  "UI/UX",
  "Figma",
  "npm",
];

export default function CVPage() {
  return (
    <div className="cv-page">
      <div className="cv-toolbar">
        <a href="#home" className="btn btn-ghost">
          <FaArrowLeft /> Back to Portfolio
        </a>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => window.print()}
        >
          <FaPrint /> Print / Save as PDF
        </button>
      </div>

      <div className="cv-sheet">
        <aside className="cv-side">
          <div className="cv-avatar">
            <img src={profile.photo} alt={profile.name} />
          </div>
          <h1 className="cv-name">{profile.name}</h1>
          <p className="cv-role">{profile.role}</p>

          <h2 className="cv-h2">Contact</h2>
          <div className="cv-contact">
            <p>
              <b>Email:</b>
              <br />
              {profile.email}
            </p>
            <p>
              <b>Phone / WhatsApp:</b>
              <br />
              {profile.phone}
            </p>
            <p>
              <b>Location:</b>
              <br />
              {profile.location}
            </p>
            <p>
              <b>Nationality:</b> {profile.nationality}
            </p>
            <p>
              <b>Date of Birth:</b> {profile.dob}
            </p>
          </div>

          <h2 className="cv-h2">Core Skills</h2>
          {skills.map((s) => (
            <div className="cv-skill" key={s.name}>
              <div>
                {s.name} — {s.level}%
              </div>
              <div className="cv-bar">
                <div className="cv-fill" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}

          <h2 className="cv-h2">Also Using</h2>
          <div className="cv-tags">
            {alsoUsing.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <h2 className="cv-h2">Languages</h2>
          <div className="cv-tags">
            {profile.languages.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <h2 className="cv-h2">Interests</h2>
          <div className="cv-tags">
            {profile.interests.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </aside>

        <main className="cv-main">
          <h2>Profile</h2>
          <p>
            {profile.about} Currently mastering the MERN stack while delivering
            freelance projects with React and Firebase.
          </p>

          <h2>Experience</h2>
          {experience.map((item) => (
            <div className="cv-item" key={item.title}>
              <span className="cv-when">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}

          <h2>Education</h2>
          {education.map((item) => (
            <div className="cv-item" key={item.title}>
              <span className="cv-when">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}

          <h2>Selected Projects</h2>
          {projects.map((p) => (
            <div className="cv-proj" key={p.key}>
              <b>{p.name}</b> — {p.description}{" "}
              {p.url && (
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                  Visit website
                </a>
              )}
            </div>
          ))}

          <h2>Services</h2>
          <p>{services.map((s) => s.title).join(" · ")}.</p>
        </main>
      </div>
    </div>
  );
}
