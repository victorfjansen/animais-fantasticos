export default class Accordion {
  constructor(list){
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }
  
  
  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // add the Accordion event in itens
  addAccordionEvent(){
    this.accordionList.forEach((item) => {
      item.addEventListener('click',() => this.toggleAccordion(item));
    });
  }

  // start function
  init(){
    if(this.accordionList.length){
      // start first item 
      this.toggleAccordion(this.accordionList[0])
      this.addAccordionEvent()
    }
    return this
  }
}

