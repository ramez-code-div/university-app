import "./navbar.css";
function Navbar() {
  return (
    <nav className="App-navbar">
      <h1>Liste des étudiants</h1>
      <h2>
        <a href="">Accueil</a> 
        <a href="">Contact</a>
      </h2>
      <a href="#accueil" class="E">Groupe</a>
      {" | "}
      <a href="#etudiants" class="E">Étudiants</a>
    </nav>
  );
}

export default Navbar;