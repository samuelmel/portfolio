const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-6 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-6">
        <div className="flex items-center gap-2">
          <span className="status-dot" />
          <span>session: persistent · build: stable</span>
        </div>
        <div>© {new Date().getFullYear()} samuel mendes dos santos · fortaleza/br</div>
      </div>
    </footer>
  );
};

export default Footer;
