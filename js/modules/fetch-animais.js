import AnimaNumeros from "./anima-numeros.js"

export default function fetchAnimals(url, target){
  let animaisJSON
  // create onde div and storage informations with all animals
  function createAnimals(animal){
    const div = document.createElement("div")
    div.classList.add("numero-animal")
    div.innerHTML = `<h3>${animal.especie}</h3> <span data-numero>${animal.total}</span>`
    return div
  }
  
  // fill each animal in DOM
  const numeroGrid = document.querySelector(target)
  function fillAnimals(animal){
      const divAnimal = createAnimals(animal)
      numeroGrid.appendChild(divAnimal)
  }

  function animaAnimaisNumeros(){
    const animaNumeros = new AnimaNumeros('[data-numero]', ".numeros", "ativo")
    animaNumeros.init()
  }

  // get the animals through one arquive json
  // and creates each animal with "createAnimal"
  async function fetchAnimais(){
    try{
      // do Fetch and wait the answer and
      // after transform the answer in json
      const animaisResponse = await fetch(url)
      animaisJSON = await animaisResponse.json()

      // After transforming to json, activate the functions to fill
      // and animate the numbers
      animaisJSON.forEach(animal => fillAnimals(animal))  
      animaAnimaisNumeros()    
    }catch(erro){
      console.log(Error(erro))
    }
}

  return fetchAnimais()
}

