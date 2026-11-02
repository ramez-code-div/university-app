import { useState } from "react";

function StudentCard(props) {
  // État local pour gérer l'affichage ou le masquage des coordonnées[cite: 21]
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  // Fonction pour inverser la valeur de l'état (true / false)[cite: 22]
  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  
  function handleEdit() {
    const nouveauPrenom = prompt("Entrez le nouveau prénom :", props.prenom);
    if (nouveauPrenom !== null && nouveauPrenom.trim() !== "") {
      props.onUpdate(props.email, nouveauPrenom.trim());
    }
  }

  return (
    <div className="etudiant">
      <h1>Fiche étudiant</h1>

      <img
        src={props.studentimg}
        alt={`Photo de ${props.prenom} ${props.nom}`}
        width="150"
      />

      <p>
        Nom & Prénom : {props.nom} {props.prenom}
      </p>

      <p>Filière : {props.filiere}</p>
      <p>Année d’étude : {props.annee}</p>
      <p>Groupe : {props.grp}</p>

      {coordonneesVisibles && (
        <div className="coordonnees-details">
          <p>Email : {props.email}</p>
          <p>Téléphone : {props.tel}</p>
          <p>Ville : {props.ville}</p>

          <a href={`mailto:${props.email}`}>
            <button>Contacter</button>
          </a>
        </div>
      )}

    
      <button onClick={basculerCoordonnees}>
        {coordonneesVisibles
          ? "Masquer les coordonnées"
          : "Afficher les coordonnées"}
      </button>

      <button onClick={handleEdit}>Modifier</button>

      <button onClick={() => props.onDelete(props.email)}>Supprimer</button>
    </div>
  );
}

export default StudentCard;