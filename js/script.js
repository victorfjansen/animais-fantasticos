import ScrollSuave from "./modules/scroll-suave.js"
import Accordion from "./modules/animacao-accordion.js"
import TabNav from "./modules/init-tab-nav.js"
import Modal from "./modules/modal.js"
import ToolTip from "./modules/tooltip.js"
import DropdownMenu from "./modules/dropdown-menu.js"
import MenuMobile from "./modules/menu-mobile.js"
import Funcionamento from './modules/funcionamento.js'
import fetchAnimals from "./modules/fetch-animais.js"
import fetchBitcoin from "./modules/fetch-btc.js"
import ScrollAnima from "./modules/anima-scroll.js"

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

const scrollAnima = new ScrollAnima('[data-anime="scroll"]')
scrollAnima.init()

const dropdownMenu = new DropdownMenu("[data-dropdown]")
dropdownMenu.init()

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]')
menuMobile.init()

const funcionamento = new Funcionamento('[data-semana]','aberto')
funcionamento.init()

fetchAnimals("./animaisapi.json",".numeros-grid")
fetchBitcoin("https://blockchain.info/ticker", '.btc-preco')


