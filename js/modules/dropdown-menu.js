import outsideClick from "./outside-click.js"


export default class DropdownMenu{
  constructor(dropDownMenus, events){
  this.dropDownMenus = document.querySelectorAll(dropDownMenus)

  // defines touchstart and "click" like standard argument of events
  // if the user dont defines
  if(events === undefined) this.events = ['touchstart', "click"]
  else this.events = events

  this.activeClass = 'ativo'
  this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
  }
  
  // actives the dropdownMenu and add the function
  // who observes the click outside of him
  activeDropdownMenu(event){
    console.log("asjd")
    event.preventDefault()
    const element = event.currentTarget
    element.classList.add(this.activeClass)
    outsideClick(element, this.events,() =>  {
      element.classList.remove(this.activeClass)
    })
  }

  // add the events to dropdownMenu
  addDropdownMenusEvent() {
    this.dropDownMenus.forEach((item) => {
     this.events.forEach((userEvent) => {
        item.addEventListener(userEvent, this.activeDropdownMenu)
      })
    })
  }

  init(){
    if(this.dropDownMenus.length){
     this.addDropdownMenusEvent()
    }
    return this
  }
}



