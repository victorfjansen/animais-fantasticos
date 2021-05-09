export default class TabNav {
  constructor(menu, content){
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo"
  }
  
  // Actives the tab according of the same
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }
  
  // add events in tabs
  addTabNavEvent(){
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index))
    });
  }

  // init addTabNavEvent
  init(){
    if(this.tabMenu.length && this.tabContent.length){
      // ativar primeiro item
      this.activeTab(0)
      this.addTabNavEvent()
    }
    return this
  }
}
