export default class Modal{
  
  constructor(botaoAbrir, botaoFechar, containerModal){
    this.botaoAbrir = document.querySelector(botaoAbrir)
    this.botaoFechar = document.querySelector(botaoFechar)
    this.containerModal = document.querySelector(containerModal)

    // binda this to callback for do reference to object of class
    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.cliqueForaModal = this.cliqueForaModal.bind(this)
  }

  // open or closes the modal
  toggleModal (){
    this.containerModal.classList.toggle("ativo")
  }

  // add toggle events to modal
  eventToggleModal(event){
    event.preventDefault()
    this.toggleModal()
  }

  // closes modal if click in outside
  cliqueForaModal(event){
    if(event.target === this.containerModal){
      this.toggleModal(event)
    }    
  }

  // add the events to elements of modal
  addModalEvents(){
    this.botaoAbrir.addEventListener("click", this.eventToggleModal)
    this.botaoFechar.addEventListener("click", this.eventToggleModal)
    this.containerModal.addEventListener("click", this.cliqueForaModal)
  }


  init(){
    if (this.botaoAbrir && this.botaoFechar && this.containerModal){
      this.addModalEvents()
    }
    return this
  }

}



