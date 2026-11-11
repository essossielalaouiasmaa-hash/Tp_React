/*function ListeTaches(){
  return(
    
      <ul className="liste-taches">
         <li className="tache terminee">
             <span className="titre">Comprendre react</span>
        </li>

         <li>
             <span className="titre">tester react</span>
        </li>

        <li>
             <span className="titre">cree projet react</span>
        </li>

      </ul>  
    

  )
}*/
import Tache from "./Tache.jsx"

function ListeTaches({taches}){
  if(taches.length === 0){
    return <p className="vide"> Aucune tache à afficher. </p>
  }
  return(
    <ul className="liste-taches">
      {taches.map((tache) => (
        <Tache key={tache.id} titre={tache.titre} terminee={tache.terminee}/>
      ))}
    </ul>  
  
  )
}

export default ListeTaches