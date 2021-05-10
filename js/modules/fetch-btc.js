export default function fetchBitcoin(url, target){
 async function fetchBTC(){
   try{
    const dadosBTC = await fetch(url)
    const dadosBTCJSON = await dadosBTC.json()
    const span = document.querySelector(target)
    span.innerText = (100 / dadosBTCJSON.BRL.sell).toFixed(4)
  } catch(error){
    console.log(error)
  }
 }

 fetchBTC()
}



