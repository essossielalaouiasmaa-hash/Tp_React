const ANNEE = new Date().getFullYear()

/*function Pied(){
  return(

     <footer className="pied">
        TP React - {ANNEE}
     </footer>    

  )
}*/


function Pied({auteur}){
  return(

     <footer className="pied">
        TP React - réaliser par {auteur} - {ANNEE}
     </footer>    

  )
}

export default Pied