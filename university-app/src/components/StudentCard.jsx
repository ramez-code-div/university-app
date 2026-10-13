import { useState } from 'react'


const etudiant = {
  nom : "Ben mohamed",prenom:"Ramez",email:"bramez149@gmail.com",tel:"93393326",
  filiere:"Génie Logiciel et Système d'information",annee:"2026/2027",grp:"GLSI D1",
  ville:"Mahdia",img : "pt.jpg",btn:"Contacter"
}
function StudentCard() {
  const [count, setCount] = useState(0)

  return (
<div>
    <div class="etudiant">
      <h1>Fiche etudiant</h1>
      <img src={etudiant.img}></img>
      <p><strong>Nom & Prénom :</strong>{etudiant.nom} {etudiant.prenom}</p>
      <p><strong>Email :</strong>{etudiant.email}</p>
      <p><strong>Téléphone :</strong> {etudiant.tel}</p>
      <p><strong>Filière :</strong> {etudiant.filiere}</p>
      <p><strong>Année d’étude :</strong>{etudiant.annee}</p>
      <p><strong>Groupe :</strong> {etudiant.grp}</p>
      <p><strong>Ville :</strong>{etudiant.ville}</p>
    
      <button><a href="mailto:bramez149@gmail.com">Contacter</a></button>
    </div>
</div>


  )
}

export default StudentCard;
