import { useState } from 'react'
import './App.css'
import StudentCard from './components/StudentCard.jsx'
import Header from './components/header.jsx'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import photo from "./assets/pt.jpg"
import photob from "./assets/fille.jpg"
import photoc from "./assets/men.jpg"
const etudiant = [
  {
    prenom:"Ramez",
    nom : "Ben mohamed",
    email:"bramez149@gmail.com",
    tel:"93393326",
    filiere:"Génie Logiciel et Système d'information",
    annee:"2026/2027",
    grp:"GLSI D1",
    ville:"Mahdia",
    studentimg : photo,
  },
  {
    prenom:"asma",
    nom : "fathalah",
    email:"asma.fathalah@gmail.com",
    tel:"99588754",
    filiere:"Génie Logiciel et Système d'information",
    annee:"2026/2027",
    grp:"GLSI A1",
    ville:"sousse",
    studentimg : photob,
  },
  {
    prenom:"ahmed",
    nom : "abid",
    email:"ahmed.abid@gmail.com",
    tel:"96656584",
    filiere:"Génie Logiciel et Système d'information",
    annee:"2026/2027",
    grp:"GLSI B1",
    ville:"jandouba",
    studentimg :photoc,
  },
]

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      {etudiant.map((etudiant) => (<StudentCard  
        prenom={etudiant.prenom}
        nom={etudiant.nom}
        email={etudiant.email}
        tel={etudiant.tel}
        filiere={etudiant.filiere}
        annee={etudiant.annee}
        grp={etudiant.grp}
        ville={etudiant.ville}
        studentimg={etudiant.studentimg}
        />
        ))}
      <Footer />
    </div>
  )
};

export default App;
