import Marquee from "./Marquee";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="band">
        <Marquee
          items={[
            "Available for work",
            "Let's build something",
            profile.email,
            "Ahmad Rehan © 2026",
          ]}
        />
      </div>

      <div className="footer-bottom">
        <span>© 2026 {profile.name} — All rights reserved</span>
        <span>Designed &amp; built in Pasni, Pakistan</span>
        <a className="to-top" href="#top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
