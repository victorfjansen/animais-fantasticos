export default class ToolTip{
  constructor(tooltips){
    this.tooltips = document.querySelectorAll(tooltips)

    // bind of objects of classes to callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)

  }
  
  // Move the tooltip getting reference of your styles
  // according your mouse positions
  onMouseMove(event){
      this.tooltipBox.style.top = `${event.pageY + 20}px`
      if(event.pageX + 240 > window.innerWidth){
        this.tooltipBox.style.left = `${event.pageX - 190}px`
      }else{
        this.tooltipBox.style.left = `${event.pageX + 20}px`
      }
    }
  

  // remove the tooltip and your events ( mouseMove and mouseLeave)
  onMouseLeave({currentTarget}){
      this.tooltipBox.remove()     
      currentTarget.removeEventListener("mouseleave", this.onMouseLeave) 
      currentTarget.removeEventListener("mousemove", this.onMouseMove) 
  }
  
  // creating tooltip box and put in body
  criarTooltipBox(element){
    const tooltipBox = document.createElement("div")
    const text = element.getAttribute("aria-label")
    tooltipBox.classList.add("tooltip")
    tooltipBox.innerText = text
    document.body.appendChild(tooltipBox)
    this.tooltipBox = tooltipBox
  }

  // create the tooltip and add the respective events to target
  onMouseOver({ currentTarget }){
    // creating the tooltipbox and put one eventListener
    this.criarTooltipBox(currentTarget) 
    currentTarget.addEventListener("mousemove", this.onMouseMove)
    currentTarget.addEventListener("mouseleave", this.onMouseLeave) 
  }

  // add the events on each item of "this.tooltip"
  addTooltipsEvent(){
    this.tooltips.forEach((item) =>{
      item.addEventListener('mouseover', this.onMouseOver)
    }) 
  } 
  
  init(){
    if( this.tooltips.length){
      this.addTooltipsEvent()
    }
    return this
  }
}


