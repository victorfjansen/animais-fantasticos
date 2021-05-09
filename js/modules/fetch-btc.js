export default function initFetchBTC(){
 async function fetchBTC(){
   try{
    const dadosBTC = await fetch("https://blockchain.info/ticker")
    const dadosBTCJSON = await dadosBTC.json()
    const span = document.querySelector(".btc-preco")
    span.innerText = (10000 / dadosBTCJSON.BRL.sell).toFixed(4)
  } catch(error){
    console.log(error)
  }
 }

 fetchBTC()
}



