let titre = "Bonjour le monde"
//let style = {color: "black", backgroundColor : 'yellow', width : '80%'}
let liste = ['banane', 'pomme', 874458, 'mangue', 'avocat', 'coco', 1, 859, 'yannick', 'essoh', 4584]
let listeP = liste.reduce((acc, element) => {
  if(typeof element == 'string'){
    acc.push(element)
  }
  return acc
}, [])
function App() {
  

  return (
    <>
    <Titre color= "blue" > le petit titre en utilisant des props</Titre>
      <input type="text" />
      <p>
        Lorem ipsum dolor sit amet consectetur  necessitatibus.
        consectetur  ngergergergergeecessitatibus.
       gergerg consectetur  necessitatibus.
       gergerge consectetur  necessitatezferzgfergferrgibus.

      </p>
      <ul>
        {listeP.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </>
    )
}

function Titre({color, children}){
  let afficheAlert = () => {
    alert('Bonjour yannick')
  }
  return  <div onClick={afficheAlert} id="titre" className="{titre}" style={{color: color}}>{children}</div>
}

export default App
