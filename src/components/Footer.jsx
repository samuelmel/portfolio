import { profile } from "../data/profile";

const Footer = () => (
  <footer className="page footer mono muted">
    <span>
      © {new Date().getFullYear()} Samuel Mendes dos Santos · Fortaleza, Brazil
    </span>
    <a className="link" href={profile.links.site} target="_blank" rel="noreferrer">
      Site source
    </a>
  </footer>
);

export default Footer;
