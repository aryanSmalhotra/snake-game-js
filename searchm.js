//setTimeout(() => {
 //   
    //setTimeout(() => {
      //  document.body.style.backgroundColor = 'teal';
      //  setTimeout(() => {
           // document.body.style.backgroundColor = 'orange';
      //  }, 1000)
        
 //   }, 1000)
//}, 1000)
//const dcc = (newColor,delay,doNext) => {
    //setTimeout(() => {
       // document.body.style.backgroundColor = newColor;
       // doNext && doNext();
   // },delay)
//}
//dcc('red',100)
//dcc('orange',1000)
//dcc('teal',2000)
const dcc = (color,delay) => {
    return new Promise((resolve , reject) => {
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        },delay)
    })
}
dcc('red',1000)
dcc('orange',2000)
dcc('yellow',3000)
dcc('green',4000)
dcc('cyan',5000)
const form = document.querySelector('#form')
const movies = document.querySelector('#content')
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const usesearch=(form.elements.query.value)
    const searchRes = await axios.get(`https://api.tvmaze.com/search/shows?q=${usesearch}`)
    console.log(searchRes.data)
    const img = document.createElement('IMG')
    img.src = searchRes.data[0].show.image.medium
    document.body.append(img)

})
