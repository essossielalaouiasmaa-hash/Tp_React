/*function Entete() {
  return (
    <header className="entete">
      <h1>Mes tâches</h1>
      <p>Mon premier projet React</p>
    </header>
  )
}*/


function Entete({titre,sousTitre}){
   return(
        <header className="entete">
            <h2>{titre}</h2>
            <p>{sousTitre}</p>
        </header>




   )


}

export default Entete