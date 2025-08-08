export default function Header({ children }) {
  return (
    <header className="header">
      <a href="/" aria-label="Home" className="btn">Ali Daley</a>
      {children}
    </header>
  );
}
