import { useState } from 'react'
import './App.css'
import StudentCard from './components/StudentCard.jsx'
import Header from './components/header.jsx'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import photo from "./assets/pt.jpg"
import photob from "./assets/fille.jpg"
import photoc from "./assets/men.jpg"

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      prenom: "Ramez",
      nom: "Ben mohamed",
      email: "bramez149@gmail.com",
      tel: "93393326",
      filiere: "Génie Logiciel et Système d'information",
      annee: "2026/2027",
      grp: "GLSI D1",
      ville: "Mahdia",
      studentimg: photo,
    },
    {
      prenom: "asma",
      nom: "fathalah",
      email: "asma.fathalah@gmail.com",
      tel: "99588754",
      filiere: "Génie Logiciel et Système d'information",
      annee: "2026/2027",
      grp: "GLSI A1",
      ville: "sousse",
      studentimg: photob,
    },
    {
      prenom: "ahmed",
      nom: "abid",
      email: "ahmed.abid@gmail.com",
      tel: "96656584",
      filiere: "Génie Logiciel et Système d'information",
      annee: "2026/2027",
      grp: "GLSI B1",
      ville: "jandouba",
      studentimg: photoc,
    },
  ]);

  function ajouterEtudiant() {
    const nouvelEtudiant = {
      prenom: "Yassine",
      nom: "Ben Salem",
      email: "yassine.bensalem@gmail.com",
      tel: "+216 44 444 444",
      filiere: "Génie Logiciel et Systèmes d'Information",
      annee: "2026/2027",
      grp: "GLSI 1",
      ville: "Kairouan",
      studentimg: photoc,
    };
    setEtudiants([...etudiants, nouvelEtudiant]);
  }

  function supprimerEtudiant(email) {
    setEtudiants(etudiants.filter((etudiant) => etudiant.email !== email));
  }

  function modifierEtudiant(email, nouveauPrenom) {
    setEtudiants(
      etudiants.map((etudiant) =>
        etudiant.email === email
          ? { ...etudiant, prenom: nouveauPrenom }
          : etudiant
      )
    );
  }

  return (
    <div className="container">
      <Header />
      <Navbar />
      
      <div className="actions">
        <button onClick={ajouterEtudiant}>+ Ajouter un étudiant</button>
      </div>

      {etudiants.map((etudiant) => (
        <StudentCard 
          key={etudiant.email}
          prenom={etudiant.prenom}
          nom={etudiant.nom}
          email={etudiant.email}
          tel={etudiant.tel}
          filiere={etudiant.filiere}
          annee={etudiant.annee}
          grp={etudiant.grp}
          ville={etudiant.ville}
          studentimg={etudiant.studentimg}
          onDelete={supprimerEtudiant}
          onUpdate={modifierEtudiant}
        />
      ))}
      
      <Footer />
    </div>
  );
}

export default App;