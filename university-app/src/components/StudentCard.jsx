

function StudentCard(props) {
  return (
    <div>
      <div className="etudiant">
        <h1>Fiche etudiant</h1>

        <img
          src={props.studentimg}
          alt={`Photo de ${props.prenom} ${props.nom}`}
          width="150"
        />

        <p>
          Nom & Prénom : {props.nom} {props.prenom}
        </p>

        <p>Email : {props.email}</p>
        <p>Téléphone : {props.tel}</p>
        <p>Filière : {props.filiere}</p>
        <p>Année d’étude : {props.annee}</p>
        <p>Groupe : {props.grp}</p>
        <p>Ville : {props.ville}</p>

        <a href={`mailto:${props.email}`}>
          <button>Contacter</button>
        </a>
      </div>
    </div>
  )
}

export default StudentCard