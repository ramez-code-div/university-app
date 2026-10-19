import { useState } from 'react'
import './App.css'
import StudentCard from './components/StudentCard.jsx'
import header from "./components/header.jsx";
import navbar from "./components/navbar.jsx";
import footer from "./components/footer.jsx";
const etudiant = {
  {
    prenom:"Ramez",
    nom : "Ben mohamed",
    email:"bramez149@gmail.com",
    tel:"93393326",
    filiere:"Génie Logiciel et Système d'information",
    annee:"2026/2027",
    grp:"GLSI D1",
    ville:"Mahdia",
    img : "student image",};
  {
    prenom:"asma",
    nom : "fathalah",
    email:"asma.fathalah@gmail.com",
    tel:"99588754",
    filiere:"Génie Logiciel et Système d'information",
    annee:"2026/2027",
    grp:"GLSI A1",
    ville:"sousse",
    img : "student image",
  };
  {
    prenom:"ahmed",
    nom : "abid",
    email:"ahmed.abid@gmail.com",
    tel:"96656584",
    filiere:"Génie Logiciel et Système d'information",
    annee:"2026/2027",
    grp:"GLSI B1",
    ville:"jandouba",
    img : "student image",
  };
};

function App() {
 const [count, setCount] = useState(0)
  return (
    <div className="container">
      <header />
      <navbar />
      {etudiant.map((etudiant) => (<StudentCard  
        prenom={etudiant.prenom}
        nom={etudiant.nom}
        email={etudiant.email}
        tel={etudiant.tel}
        filiere={etudiant.filiere}
        annee={etudiant.annee}
        grp={etudiant.grp}
        ville={etudiant.ville}
        img={etudiant.img}
        />))}
    </div>
  )
};
<footer />
export default App;
