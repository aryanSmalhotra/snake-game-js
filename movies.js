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









