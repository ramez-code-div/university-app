

function StudentCard(props) {
  return (
    <div>
      <div class="etudiant">
        <h1>Fiche etudiant</h1>
        <img src={props.img}/>
        <p>
          Nom & Prénom :{props.nom} {props.prenom}
        </p>
        <p>Email :{props.email}</p>
        <p>Téléphone :{props.tel}</p>
        <p>Filière : {props.filiere}</p>
        <p>Année d’étude :{props.annee}</p>
        <p>Groupe : {props.grp}</p>
        <p>Ville :{props.ville}</p>
      
        <button><a href="mailto:bramez149@gmail.com">Contacter</a></button>
      </div>
  </div>


  )
}

export default StudentCard;
