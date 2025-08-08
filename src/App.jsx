import { Outlet, NavLink } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div>
      <div className="container">
        <Header>
          <nav className="nav">
            {[["Home", "/"], ["Projects", "/projects"], ["Experience", "/experience"], ["Contact", "/contact"]].map(([label, to]) => (
              <NavLink key={label} to={to} end className={({ isActive }) => isActive ? "btn" : ""}>{label}</NavLink>
            ))}
          </nav>
        </Header>
        <main className="main"><Outlet /></main>
        <Footer />
      </div>
    </div>
  );
}
