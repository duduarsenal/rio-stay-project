import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="logo">Logo</div>
        <ul className="nav-ul">
          <li className="nav-item">Encomendas</li>
          <Link to="/moradores" className="nav-item">
            <li>Moradores/Inquilinos</li>
          </Link>
          <Link to="/login" className="nav-item">
            <li>Funcionarios</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
