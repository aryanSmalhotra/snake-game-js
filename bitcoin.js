let textbit = document.querySelector('#Text')
const button = document.querySelector('#Button').onclick=function(){
axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
    .then(res => {
        textbit.textContent = res.data.ticker.price
    })
    .catch(err => {
        console.log("ERR",err)
   })}
