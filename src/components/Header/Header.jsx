import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="logo">Logo</div>
        <ul className="nav-ul">
          <li className="nav-item">Encomendas</li>
          <li className="nav-item">Moradores/Inquilinos</li>
          <li className="nav-item">Funcionarios</li>
        </ul>
      </nav>
    </header>
  );
}
