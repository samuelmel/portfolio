import { useLang } from "../lang";

const Footer = () => {
  const { t, profile } = useLang();
  return (
  <footer className="page footer mono muted">
    <span>
      © {new Date().getFullYear()} Samuel Mendes dos Santos · {t.footer.place}
    </span>
    <a className="link" href={profile.links.site} target="_blank" rel="noreferrer">
      {t.footer.source}
    </a>
  </footer>
  );
};

export default Footer;
