import ScrollSuave from "./modules/scroll-suave.js"
import Accordion from "./modules/animacao-accordion.js"
import TabNav from "./modules/init-tab-nav.js"
import Modal from "./modules/modal.js"
import ToolTip from "./modules/tooltip.js"
import initDropdownMenu from "./modules/dropdown-menu.js"
import initMenuMobile from "./modules/menu-mobile.js"
import initFuncionamento from "./modules/funcionamento.js"
import fetchAnimals from "./modules/fetch-animais.js"
import fetchBitcoin from "./modules/fetch-btc.js"
import initAnimacaoScroll from "./modules/animacao-scroll.js"

const scrollSuave = new ScrollSuave("[data-menu='suave'] a[href^='#']")
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabNav.init()

const modal = new Modal("[data-modal='abrir']", "[data-modal='fechar']", "[data-modal='container']")
modal.init()

const tooltip = new ToolTip('[data-tooltip]')
tooltip.init()


initAnimacaoScroll()
initDropdownMenu()
initMenuMobile()
initFuncionamento()

fetchAnimals("./animaisapi.json",".numeros-grid")
fetchBitcoin("https://blockchain.info/ticker", '.btc-preco')


