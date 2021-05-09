import ScrollSuave from "./modules/scroll-suave.js"
import Accordion from "./modules/animacao-accordion.js"
import TabNav from "./modules/init-tab-nav.js"
import initModal from "./modules/modal.js"
import initToolTip from "./modules/tooltip.js"
import initDropdownMenu from "./modules/dropdown-menu.js"
import initMenuMobile from "./modules/menu-mobile.js"
import initFuncionamento from "./modules/funcionamento.js"
import initFetchAnimais from "./modules/fetch-animais.js"
import initFetchBTC from "./modules/fetch-btc.js"
import initAnimacaoScroll from "./modules/animacao-scroll.js"

const scrollSuave = new ScrollSuave("[data-menu='suave'] a[href^='#']")
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabNav.init()

initAnimacaoScroll()
initModal()
initToolTip()
initDropdownMenu()
initMenuMobile()
initFuncionamento()
initFetchAnimais()
initFetchBTC()

