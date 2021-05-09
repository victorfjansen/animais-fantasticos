import outsideClick from "./outside-click.js"


export default function initDropdownMenu(){
  const dropDownMenus = document.querySelectorAll("[data-dropdown]")
  
  function handleClick(event){
    event.preventDefault()
    this.classList.toggle("ativo")

    outsideClick(this, ['touchstart', "click"],() =>  {
      this.classList.remove("ativo")
    })
  }

  dropDownMenus.forEach((item) =>{
    ['touchstart', "click"].forEach((userEvent) =>{
      item.addEventListener(userEvent, handleClick)
    })
  })
}



